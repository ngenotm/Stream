import MultipleCard from "../MultipleCard";
import MultipleCardSkeleton from "../MultipleCardSkeleton";
import MovieCategoryTitle from "./MovieCategoryTitle";

const fetchMovieCategories = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/categories`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie categories:', error);
        return []
    }
}

const HomeMovieCategory = async () => {
    const categories = await fetchMovieCategories();

    return (
        <section className="container mt-14">
            <MovieCategoryTitle />

            <div
                className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-4 gap-2.5 flex-nowrap max-lg:overflow-x-auto"
            >
                {!categories || categories?.length === 0 ?
                    Array.from({ length: 3 }).map((_, index) => <MultipleCardSkeleton key={index} />) :
                    Object.entries(categories).map(([category, images], index) => (
                        <MultipleCard key={index} title={category} images={images} />
                    ))
                }

            </div>

        </section>
    );
}

export default HomeMovieCategory;