export const fetchMovieCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/categories`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie categories:', error);
        return [];
    }
};


export const fetchTopRatedCategories = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/top-rated?limit=4`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.movies;
}


export const getTrendingMovies = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/trending-movies`);
        const data = await response.json();
        return data.movies;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
}