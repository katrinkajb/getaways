import React from 'react';
import { Link } from 'react-router-dom';
import style from '../app/App.css';

const Header = () => (
    <header className={style.header}>
        <h1>Getaways</h1>
        <Link to={'/'}>Home</Link> <br/>
        <Link to={'/signup'}>Sign Up</Link> <br/>
        <Link to={'/login'}>Log In</Link> <br/>
        <Link to={'/logout'}>Log Out</Link>
    </header>
)

export default Header
