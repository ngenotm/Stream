export const fetchSeriesCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/categories`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.categories;
    } catch (error) {
        console.error('Error fetching movie categories:', error);
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