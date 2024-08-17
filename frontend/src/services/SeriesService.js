export const fetchSeriesCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/categories`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.categories;
    } catch (error) {
        console.error('Error fetching series categories:', error);
        return [];
    }
};


export const fetchTopRatedCategories = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/top-rated?limit=4`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.series;
}


export const getTrendingSeries = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/trending-series`);
        const data = await response.json();
        return data.series;
    } catch (error) {
        console.error("Error fetching trending series:", error);
        return [];
    }
}

export const getNewReleasedSeries = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/new-released`);
        const data = await response.json();
        return data.series;
    } catch (error) {
        console.error("Error fetching trending series:", error);
    }
}

export const getPopularSeries = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/popular-series`);
        const data = await response.json();
        return data.series;
    } catch (error) {
        console.error("Error fetching trending series:", error);
    }
}


export const fetchSingleEpisode = async (series, season, episode) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episode/${series}/${season}/${episode}`);
        const data = await res.json();
        return data.episode;
    } catch (error) {
        console.log(error);
    }
}