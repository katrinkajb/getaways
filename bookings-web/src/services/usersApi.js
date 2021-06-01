export const signUpUser = async (username, email, password) => {
    const response = await fetch(`${process.env.BASE_URL}/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify({
            username: username,
            email,
            password,
        }),
        });
    const res = await response.json();

    return res;
};

export const logInUser = async (email, password) => {
    const response = await fetch(`${process.env.BASE_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify({
            email,
            password,
        }),
        });
    const res = await response.json();

    return res;
};

export const logOutUser = async () => {
    const response = await fetch(`${process.env.BASE_URL}/users/logout`, {
        credentials: 'include'
        });
    const res = await response.json();

    return res;
};
