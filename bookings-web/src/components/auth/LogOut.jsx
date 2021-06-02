import React, { useState } from 'react';
import { logOutUser } from '../../services/usersApi';
import Loading from '../Loading/Loading';

export default function Logout({ user, setUser }) {
    const [loading, setLoading] = useState(false);

    const handleLogOut = (e) => {
        e.preventDefault();
        logOutUser()
            .then(setUser)
            .finally(() => setLoading(false));
        window.location.replace("/");
    }

    if (loading) return <Loading />

    return (
        <div>
            <h3>Click to log out</h3>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
