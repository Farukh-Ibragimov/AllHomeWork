import React, {useState} from 'react';

function Todo({todo, deleteTodo, change, onStatus}) {
    const [status, setStatus] = useState(todo.status);
    const [title, setTitle] = useState(todo.title);
    const [added, setAdded] = useState(false);



    function handleTitle(event){
        setTitle(event.target.value)

    }
    function changeTitle() {
        change(todo.id, title);
        setAdded(false)
    }

    function changeStatus (){
        const newStatus= !status;
        setStatus(newStatus)
        onStatus(todo.id, newStatus)
    }



    return (
        <li>
            <input
                type="checkbox"
                checked={status}
                onChange={changeStatus}/>
            {added ? (
                    <input
                        value={title}
                        onChange={handleTitle}
                        type="text"
                        onBlur={changeTitle}/>
                ) :
                <span
                    className={todo.status ? "active" : ""}>
               {todo.title}
           </span>
            }

            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
            {added ? (
                <button onClick={changeTitle}>сохранить</button>
            ): (
                <button onClick={() => setAdded(true)}>изменить</button>

            )}
        </li>
    );
}

export default Todo;