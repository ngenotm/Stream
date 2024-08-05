import MultipleCard from "../MultipleCard";
import MovieCategoryTitle from "./MovieCategoryTitle";


const HomeMovieCategory = () => {
    return (
        <section className="container mt-14">

            <MovieCategoryTitle />

            <div
                className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-4 gap-2.5 flex-nowrap max-lg:overflow-x-auto"
            >

                <MultipleCard />

            </div>

        </section>
    );
}

export default HomeMovieCategory;