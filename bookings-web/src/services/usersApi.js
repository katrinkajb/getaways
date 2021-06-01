export const signUpUser = async (username, email, password) => {
    try {
        const rawResponse = await fetch(`${process.env.BASE_URL}/users/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        const res = await rawResponse.json();
        const loggedIn = await logInUser(res.email, password);

        return loggedIn;
    } catch {
        throw new Error(await res.json());
    }
};

export const logInUser = async (email, password) => {
    try {
        const rawResponse = await fetch(`${process.env.BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        const res = await rawResponse.json();

        localStorage.setItem('USER', res.username);

        return res;
    } catch {
        throw new Error(await res.json());
    }
};

export const logOutUser = async () => {
    try {
        const rawResponse = await fetch(`${process.env.BASE_URL}/users/logout`, {
            credentials: 'include'
        });
        const response = await rawResponse.json();
        localStorage.removeItem('USER');
        return response;
    } catch {
        throw new Error(await response.json());
    }
};
