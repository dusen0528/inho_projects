import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'; 
import './Home.css';
class Home extends React.Component{
    state = {
      isLoading: true, // 현재 로딩중인지 여부를 나타내는 변수
      movies: [], //영화 목록 배열
    };
    getMovies = async () => {
      //async()는 getMovies함수가 axios.get()함수 실행완료가 될 때까지 기다리게 해주는 함수
      const {                   //구조분해 할당 
        data: { //data->
          data: {movies}, //data->movies
        }
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=year'); //출시연도순으로 영화 API 호출 
      this.setState({movies, isLoading: false}); //왼쪽 state, 오른쪽 구조 분해 할당으로 얻은 영화 데이터가 있는 변수 
      
    }
    componentDidMount(){ //render 함수가 실행된 다음 실행되는 함수
      //영화 데이터 로딩
      this.getMovies(); 
    }
    render(){
      const {isLoading, movies} = this.state;
        return ( 
        <section className="container">{isLoading? ( //JSX의 가장 바깥쪽은 section 엘리먼트로 구분
        <div className="loader"> 
          <span className="loader__text">로딩중...</span>
        </div>) : ( //movie컴포넌트도 아래와 같이 구분
        //movies 클래스명은 Movie.css에서 사용됨
          <div className="movies"> 
            {movies.map((movie)=> (  //map함수는 movies 배열의 요소를 돌면서 인자로 전달된 함수를 사용해 처리 된 새로운
            //결과를 새로운 배열 movie에 담아 반환하는 함수
            <Movie 
              id={movie.id} //영화별 고유 ID
              year={movie.year} //출시한 연도
              title={movie.title} //제목
              rating={movie.rating} //평점
              poster={movie.medium_cover_image} //포스터
              summary={movie.summary} //요약
              runtime={movie.runtime} //상영시간
              genres={movie.genres} //장르
          />
            ))}
          </div>
        )}
        </section>
        );
    }
}

export default Home;
