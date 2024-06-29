import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import style from "./postPage.module.css"

const PostPage = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [users, setUsers] = useState([]);
    const [Message, setMessage] = useState('');

    const [modalStyle, setModalStyle] = useState({ display: 'none' });


    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/users");
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createPost = async (data) => {

        console.log(data)
        try {
            await axios.post("http://localhost:8000/users", data);
            setMessage('Пользователь успешно создан');
            getPosts();

        } catch (error) {
            console.error(error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/users/${id}`);
            getPosts();
            setMessage('Пользователь успешно удален');
            openModal()
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = (data) => {
        createPost(data);
        openModal()
        reset();
    };
    const openModal = () => {
        setModalStyle({  position: "fixed",
            height: "200px",
            width: "300px",
            top:"50%",
            left:"50%",
            zIndex: 2,
        background: "rgba(16,90,189,0.5)",
        backdropFilter: "blur(20px)",
        display: "block",
        fontSize:"30px",
        textAlign:"center",
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>
                    <span>name</span>
                    <input className={errors.name && "error"} {...register("name", {required: true})}
                           placeholder={errors.name ? "enter name" : "name"}/>
                    {errors.name && <small>обязательное поле для ввода</small>}
                </label>
                <label>
                    <span>username</span>
                    <input className={errors.username && "error"} {...register("username", {required: true})}
                           placeholder={errors.username ? "enter username" : "username"}/>
                    {errors.username && <small>обязательное поле для ввода</small>}
                </label>
                <label>
                    <span>email</span>
                    <input className={errors.email && "error"} {...register("email", {required: true})}
                           placeholder={errors.email ? "enter email" : "email"}/>
                    {errors.email && <small>обязательное поле для ввода</small>}
                </label>


                <button type="submit">Создать</button>

            </form>

            <div style={modalStyle}>


                <div>
                    <div>{Message}</div>
                </div>
                <button onClick={() => setModalStyle({ display: 'none' })}>Закрыть</button>
            </div>
            <div className={style.users}>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <div key={index} className={style.user}>
                            <div className={style.userData}>
                                <div><h2>Name</h2> <p>{user.name}</p></div>
                                <div><h2>Username</h2> <p>{user.username}</p></div>
                                <div><h2>Email</h2> <p>{user.email}</p></div>
                            </div>
                            <button onClick={() => deletePost(user.id)}>Удалить</button>
                        </div>
                    ))
                ) : (
                    <p>Таблица пуста</p>
                )}
            </div>
        </div>
    );
};

export default PostPage;