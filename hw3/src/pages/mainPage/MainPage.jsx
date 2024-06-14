import React from 'react';
import Description from "../../components/description/Description";
import style from './mainPage.module.css'

const mainInfo =  {title: "Title", description: "description"}
function MainPage(props) {
    return (
       <div className={style.description}>
           <Description info={mainInfo}/>
       </div>
    );
}

export default MainPage;