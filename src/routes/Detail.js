import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } =  this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location:{state}} = this.props;
        if(state){
            return(
            <div className="moviedetail">
                <img src={state.poster} alt={state.title} titlt={state.title}></img>
            <div className="movie__ddata">
                <h3 className="movie__dtitle">{state.title}</h3>
                <h4 className="movie__drating">{state.rating}/10</h4>
                <h5 className="movie__dyear">{state.year}</h5>
                <ul className="movie__dgenres">
                    {state.genres.map((genre, index) => (
                    <li key={index} className="genres__genre">
                    {genre}
                    </li>
                    ))}
                </ul>
                <p className="movie__dsummary">{state.summary}</p>
            </div>
            </div>
            )
        } else {
            return null
        }
    }

}

export default Detail;