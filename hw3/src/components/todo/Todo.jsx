import React from 'react';
import style from'./todo.module.css'
function Todo({props}) {
    return (
        <div className={style.props}>{props}</div>
    );
}

export default Todo;