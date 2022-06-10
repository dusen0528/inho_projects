import React from "react";
import './About.css';
function About(props){
    console.log(props);
    return(
        <div className="about__container">
            <span>
            2022년 2학년 1학기 자료구조 기말 프로젝트
                리액트를 활용한 영화 평점 웹 서비스<br></br>
            </span>
            <span>10191794 최인호</span>
        </div>
    );  

}

export default About;