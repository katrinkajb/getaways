import React, { useState } from 'react';
import { logInUser } from '../../services/usersApi';
import Loading from '../Loading/Loading';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = (e) => {
        e.preventDefault();
        setLoading(true);
        logInUser(email, password)
            .then(setUser)
            .finally(() => setLoading(false));
    }

    if (loggedInUser && user.username) return (
        <section>
            <h3>You're already logged in</h3>
        </section>
    );

    if (loading) return <Loading />

    return (
        <>
            <h2>Please log in</h2>
            <form onSubmit={handleLogIn}>
            <input
                    placeholder='email'
                    id='email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder='password'
                    id='password'
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Log In</button>
            </form>
        </>
    )
}
