const getAll = async () => {
    const response = await fetch('http://localhost:8080/movies');
    return await response.json();
}

export default {
    getAll,
}