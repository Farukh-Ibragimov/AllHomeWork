import React from 'react';
import Description from "../../components/description/Description";
import style from './aboutPage.module.css'

const aboutInfo =  {title: "Title 2", description: "description 2"}
function AboutPage(props) {
    return (
        <div className={style.description}>
        <Description info={aboutInfo}/>
        </div>
    );
}

export default AboutPage;