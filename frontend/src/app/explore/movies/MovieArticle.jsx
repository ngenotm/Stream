import MovieCategorySection from "./GenresSection";
import TopMovieSection from "./TopMovieSection";
import TrendingMoviesSection from "./TrendingSection";
import NewReleasedMovieSection from "./NewReleasedSection";
import PopularMoviesSection from "./PopularMoviesSection";

const MovieArticle = () => {
    return (
        <article
            className="relative border border-c-black-15 rounded-xl xl:pt-6 xl:pb-10 pt-3 pb-10 lg:px-8 md:px-6 px-4 space-y-16"
        >

            <span className="inline-flex absolute top-[-20px] text-super-sm items-center bg-c-red-45 text-white rounded-md px-4 h-[40px]">
                Movies
            </span>

            <MovieCategorySection />

            <TopMovieSection />

            <TrendingMoviesSection />

            <NewReleasedMovieSection />

            <PopularMoviesSection />

        </article>
    );
}

export default MovieArticle;