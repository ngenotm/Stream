import GenresCard from "@/components/MultipleCard";
import SlidePagination from "@/components/SlidePagination";
import Carousel from "@/components/carousel/Carousel";
import ArticleSection from "./ArticleSection";
import GenresSection from "./GenresSection";
import TopMovieSection from "./TopMovieSection";

const ExplorePage = () => {
    return (
        <main className="container mt-6 mb-40">

            {/*//! START Carousel */}
            <Carousel />
            {/*//? END Carousel */}


            {/*//! START Main Section */}
            <section className="mt-32 space-y-32">

                {/*//! START Movie article */}
                <article
                    className="relative border border-c-black-15 rounded-xl xl:pt-6 xl:pb-10 pt-3 pb-10 lg:px-8 md:px-6 px-4 space-y-16"
                >

                    <span className="inline-flex absolute top-[-20px] text-super-sm items-center bg-c-red-45 text-white rounded-md px-4 h-[40px]">
                        Movies
                    </span>


                    <GenresSection />

                    <TopMovieSection />

                    {/*//! Trending Article */}
                    <ArticleSection title="Trending Now" />

                    {/*//! New Released Article */}
                    <ArticleSection title="New Releases" />

                    {/*//! Most Popular Article */}
                    <ArticleSection title="Most Popular" />

                </article>
                {/*//? END Movie article */}


                {/*//! START Series article */}
                <article
                    className="relative border border-c-black-15 rounded-xl xl:pt-6 xl:pb-10 pt-3 pb-10 lg:px-8 md:px-6 px-4 space-y-16"
                >

                    <span className="inline-flex absolute top-[-20px] text-super-sm items-center bg-c-red-45 text-white rounded-md px-4 h-[40px]">
                        Series
                    </span>


                    {/*//! START Our Genres Article */}
                    <div className="" style={{ marginTop: "2.3rem" }}>
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium">Our Genres</h5>
                            <SlidePagination />
                        </div>

                        <div
                            className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-4 gap-2.5 flex-nowrap max-lg:overflow-x-auto"
                        >

                            <GenresCard />

                        </div>
                    </div>
                    {/*//? END Our Genres Article */}

                    {/*//! START Popular Article */}
                    <div>
                        <div className="flex items-center justify-between mt-4 mb-4">
                            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-lg font-medium">Popular Top 10 In Genres</h5>
                            <SlidePagination />
                        </div>

                        <div
                            className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-4 gap-2.5 flex-nowrap max-lg:overflow-x-auto"
                        >

                            <GenresCard />

                        </div>
                    </div>
                    {/*//? END Popular Article */}


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