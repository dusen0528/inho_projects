import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return (
        <div className='nav'>
            <Link to="/">홈화면</Link> 
            <Link to="/about">정보</Link>
        </div>
    );
}

export default Navigation;