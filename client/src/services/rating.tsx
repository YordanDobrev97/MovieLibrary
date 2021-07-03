const getAll = async (title: String) => {
    const response = await fetch(`http://localhost:8080/rating/all?title=${title}`);
    return await response.json();
}

const addRating = async (rating: number, note: string, title: string) => {
    const response = await fetch('http://localhost:8080/rating', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            rating, note, title
        })
    });
    return await response.json();
}

export default {
    addRating,
    getAll,
}