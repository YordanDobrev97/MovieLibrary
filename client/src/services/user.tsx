
async function registerUser(username: string, password: string) {
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

export default {
    registerUser
}