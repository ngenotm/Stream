export const fetchDirector = async (slug) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/director/${slug}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching director:", error);
    }
}