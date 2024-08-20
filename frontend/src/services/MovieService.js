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


export const getTrendingMovies = async (currentPage, page) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/trending-movies?page=${currentPage || page || 1}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
}

export const getNewReleasedMovies = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/new-released`);
        const data = await response.json();
        return data.movies;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
    }
}

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/popular-movies`);
        const data = await response.json();
        return data.movies;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
    }
}

export const fetchSingleMovies = async (slug) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${slug}`);
    const data = await res.json();
    return data;
}

export const downloadMovieApi = async (url) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/download`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        if (!response.ok) {
            throw new Error(`Failed to download file: ${response.statusText}`);
        }
        return response;
    } catch (error) {
        console.error('Download error:', error);
    }
};