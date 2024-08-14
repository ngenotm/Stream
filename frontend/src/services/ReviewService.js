export const fetchPreviews = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${id}`);
    const data = await response.json();
    return data.reviews;
}