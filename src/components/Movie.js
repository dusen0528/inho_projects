import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({title, year, rating, poster, summary, runtime, genres}){
    return (
        <div className="movie"> 
            <Link to = {{
                    pathname: '/movie-detail', //movie-detail링크는 
                    state: {year, title, summary, poster, genres, rating, runtime}
                    //위와 같은 정보들을 반환
                }}>
                <img src={poster} alt={title} title={title} /> 
                <div className="movie__data"> 
                    <h3 className="movie__title">{title}</h3>
                    <ul className="movie__genres">
                        {genres.map((genre, index)=>{
                        //모든 장르에 function을 실행하고 그 결과 값을 저장해서 새로운 배열로 만드는 map()함수
                        return (
                        <li key={index} className="movie__genre">
                            {genre} 
                        </li>
                        );
                    })}
                    </ul>
                    <h5 className="movie__year"> Year of release : {year}<br></br> 
                        Rating : {rating}<br></br>
                        Runtime : {runtime}
                    </h5>
                    <p className="movie__summary">{summary.slice(0, 150)}...</p> 
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired, //연도
    title: PropTypes.string.isRequired, //제목
    rating: PropTypes.number.isRequired, //평점
    poster: PropTypes.string.isRequired, //포스터 주소는 문자열
    summary: PropTypes.string.isRequired, //요약
    runtime: PropTypes.number.isRequired, //상영시간
    genres : PropTypes.arrayOf(PropTypes.string).isRequired, //장르
};

export default Movie;