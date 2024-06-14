import React from 'react';
import Todo from "../../components/todo/Todo";
import style from './todosPage.module.css'

const array = ["todo 1", "todo 2", "todo 3"]

function TodosPage(props) {
    return (

        array.map((todo, index) => (
            <div key={index} className={style.todo}>
                <Todo key={index} props={todo}/>
            </div>
        ))

    );
}

export default TodosPage;