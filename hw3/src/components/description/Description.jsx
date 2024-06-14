import React from 'react';
import style from './description.module.css'
function Description({info}) {
    return (
        <div>
            <h2 className={style.title}>{info.title}</h2>
            <p className={style.description}>{info.description}</p>
        </div>
    );
}

export default Description;