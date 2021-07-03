
const registerUser = async (username: string, password: string) => {
    const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            username, password
        })
    });
    return await response.json();
}

const loginUser = async (username: string, password: string) => {
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            username, password
        })
    });
    return await response.json();
}

export default {
    registerUser,
    loginUser,
}