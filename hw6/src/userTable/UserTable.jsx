import React from 'react';
import {useForm} from 'react-hook-form';
import style from "./userTable.module.css"
function UserForm() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [users, setUsers] = React.useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const deleteUser = (index) => {
        const updatedUsers = users.filter((user, i) => i !== index);
        setUsers(updatedUsers);
    };

    const clearTable = () => {
        setUsers([]);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>
                    <span>name</span>
                    <input className={errors.name && "error"} {...register("name", {required: true})} placeholder={errors.name ? "enter name":"name"}/>
                    {errors.name && <small>обязательное поле для ввода</small>}
                </label>
                <label>
                    <span>username</span>
                    <input className={errors.username && "error"} {...register("username", {required: true})} placeholder={errors.username ? "enter username":"username"}/>
                    {errors.username && <small>обязательное поле для ввода</small>}
                </label>
                <label>
                    <span>email</span>
                    <input className={errors.email && "error"} {...register("email", {required: true})} placeholder={errors.email ? "enter email":"email"}/>
                    {errors.email && <small>обязательное поле для ввода</small>}
                </label>
                <label>
                    <span>phone</span>
                    <input className={errors.phone && "error"} {...register("phone", {required: true})} placeholder={errors.phone ? "enter phone":"phone"}/>
                    {errors.phone && <small>обязательное поле для ввода</small>}
                </label>


                <label>
                    <span>website</span>
                    <input type="text" placeholder='website' {...register("website")}/>

                </label>




                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            <div className={style.users}>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <div key={index} className={style.user}>
                            <div className={style.userData}>
                                <div><h2>Name</h2> <p>{user.name}</p></div>
                                <div><h2>Username</h2> <p>{user.username}</p></div>
                                <div><h2>Email</h2> <p>{user.email}</p></div>
                                <div ><h2>Phone</h2> <p>{user.phone}</p></div>
                                <div><h2>Website</h2><p>{user.website}</p></div>
                            </div>
                            <button onClick={() => deleteUser(index)}>Удалить</button>
                        </div>
                    ))
                ) : (
                    <p>Таблица пуста</p>
                )}
            </div>
        </div>
    );
}

export default UserForm;