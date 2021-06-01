import React, { useState } from 'react';
import { signUpUser } from '../../services/usersApi';
import Loading from '../Loading/Loading';

export default function SignUp({ user, setUser }) {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        setLoading(true);

        signUpUser(username, email, password)
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
        <main>
            <h1>Sign up for Getaways!</h1>
            <form onSubmit={handleSignUp}>
                <input
                    placeholder='Username'
                    id='username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <button>Signup</button>
            </form>
        </main>
    )
};
