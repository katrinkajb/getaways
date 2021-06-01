import React from 'react';
import style from '../components/app/App.css';
import Logout from '../components/auth/LogOut';

const LogOutPage = () => {
 return (
    <main className={style.main}>
      <Logout />
    </main>
  )
};

export default LogOutPage;
