import React from 'react';
import style from '../components/app/App.css';
import Login from '../components/auth/Login';

const LoginPage = () => {
 return (
    <main className={style.main}>
      <Login />
    </main>
  )
};

export default LoginPage;
