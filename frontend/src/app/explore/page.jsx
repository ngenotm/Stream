import GenresCard from "@/components/MultipleCard";
import SlidePagination from "@/components/SlidePagination";
import Carousel from "@/components/carousel/Carousel";
import ArticleSection from "./ArticleSection";
import MovieCategorySection from "./movies/GenresSection";
import TopMovieSection from "./movies/TopMovieSection";
import TrendingSection from "./movies/TrendingSection";
import NewReleasedSection from "./movies/NewReleasedSection";
import PopularMoviesSection from "./movies/PopularMoviesSection";

import SeriesCategorySection from "./series/GenresSection";
import TopSeriesSection from "./series/TopSeriesSection";

const ExplorePage = () => {
    return (
        <main className="container mt-6 mb-40">

            {/*//! START Carousel */}
            <Carousel />

            {/*//! START Main Section */}
            <section className="mt-32 space-y-32">

                {/*//! START Movie article */}
                <article
                    className="relative border border-c-black-15 rounded-xl xl:pt-6 xl:pb-10 pt-3 pb-10 lg:px-8 md:px-6 px-4 space-y-16"
                >

                    <span className="inline-flex absolute top-[-20px] text-super-sm items-center bg-c-red-45 text-white rounded-md px-4 h-[40px]">
                        Movies
                    </span>

                    <MovieCategorySection />

                    <TopMovieSection />

                    <TrendingSection />

                    <NewReleasedSection />

                    <PopularMoviesSection />

                </article>


                {/*//! START Series article */}
                <article
                    className="relative border border-c-black-15 rounded-xl xl:pt-6 xl:pb-10 pt-3 pb-10 lg:px-8 md:px-6 px-4 space-y-16"
                >

                    <span className="inline-flex absolute top-[-20px] text-super-sm items-center bg-c-red-45 text-white rounded-md px-4 h-[40px]">
                        Series
                    </span>

                    <SeriesCategorySection />

                    <TopSeriesSection />


                </article>
                {/*//? END Series article */}

            </section>
            {/*//? END Main Section */}


        </main>
    );
}
{/*//! Trending Article */ }
<ArticleSection title="Trending Series Now" />

{/*//! New Released Article */ }
<ArticleSection title="New Releases Series" />

{/*//! Most Popular Article */ }
<ArticleSection title="Most Popular Series" />

export default ExplorePage;