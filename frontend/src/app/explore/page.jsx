import { ClockIcon, EyeIcon, LeftArrowSvg, LikeSvg, PlaySvg, PlusSvg, SoundSvg, StarIcon } from "@/assets/Svgs";
import GenresCard from "@/components/GenresCard";
import SlidePagination from "@/components/SlidePagination";
import Link from "next/link";

const ExplorePage = () => {
    return (
        <main className="container mt-6 mb-40">

            {/*//! START Carousel */}
           
            {/*//? END Carousel */}


            {/*//! START Main Section */}
            <section className="mt-32">

                {/*//! START Movie article */}
                <article
                    className="relative border border-c-black-15 rounded-xl xl:pt-6 xl:pb-10 pt-3 pb-10 lg:px-8 md:px-6 px-4 space-y-16"
                >

                    <span className="inline-flex absolute top-[-20px] text-super-sm items-center bg-c-red-45 text-white rounded-md px-4 h-[40px]">
                        Movies
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

                    {/*//! START Trending Article */}
                    <div>
                        <div className="flex items-center justify-between mt-4 mb-4">
                            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium">Trending Now</h5>
                            <SlidePagination />
                        </div>

                        <div
                            className="flex flex-nowrap gap-6 overflow-x-auto"
                        >

                            <div className="bg-c-black-10 border border-c-black-15 rounded-xl flex-shrink-0 3xl:w-72 xl:w-56 md:w-48 w-[11rem] md:px-4 px-2.5 md:py-4 py-2.5">
                                <img src="/images/thumbnail-5.jpg" alt="thumbnail" className="rounded-xl w-full" />
                                <Link href="/">
                                    <h3 className="mt-3 3xl:mb-4 mb-2 3xl:leading-7 3xl:text-1.5xl text-base text-white line-clamp-2 capitalize">avenger infinity war endgame</h3>
                                </Link>
                                <div className="flex justify-between max-md:flex-col text-c-grey-60 3xl:text-super-base text-sm">
                                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                                        <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> 1h 30min
                                    </div>
                                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                                        <EyeIcon className="w-5 h-5" /> 1.5k
                                    </div>
                                </div>
                                <div className="flex justify-between gap-1 text-c-grey-60 3xl:text-super-base text-super-xs text-center mt-2">
                                    <div className="bg-c-black-08 border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-4 px-2">
                                        <div className="flex items-center 3xl:gap-1 gap-0.5">
                                            <StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /> 4.5K
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*//? END Trending Article */}

                    {/*//! START New Released Article */}
                    <div>
                        <div className="flex items-center justify-between mt-4 mb-4">
                            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium">New Releases</h5>
                            <SlidePagination />
                        </div>

                        <div
                            className="flex flex-nowrap gap-6 overflow-x-auto"
                        >

                            <div className="bg-c-black-10 border border-c-black-15 rounded-xl flex-shrink-0 3xl:w-72 xl:w-56 md:w-48 w-[11rem] md:px-4 px-2.5 md:py-4 py-2.5">
                                <img src="/images/thumbnail-5.jpg" alt="thumbnail" className="rounded-xl w-full" />
                                <Link href="/">
                                    <h3 className="mt-3 3xl:mb-4 mb-2 3xl:leading-7 3xl:text-1.5xl text-base text-white line-clamp-2 capitalize">avenger infinity war endgame</h3>
                                </Link>
                                <div className="flex justify-between max-md:flex-col text-c-grey-60 3xl:text-super-base text-sm">
                                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                                        <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> 1h 30min
                                    </div>
                                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                                        <EyeIcon className="w-5 h-5" /> 1.5k
                                    </div>
                                </div>
                                <div className="flex justify-between gap-1 text-c-grey-60 3xl:text-super-base text-super-xs text-center mt-2">
                                    <div className="bg-c-black-08 border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-4 px-2">
                                        <div className="flex items-center 3xl:gap-1 gap-0.5">
                                            <StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /> 4.5K
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*//? END New Released Article */}

                    {/*//! START Most Popular Article */}
                    <div>
                        <div className="flex items-center justify-between mt-4 mb-4">
                            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium">Most Popular</h5>
                            <SlidePagination />
                        </div>

                        <div
                            className="flex flex-nowrap gap-6 overflow-x-auto"
                        >

                            <div className="bg-c-black-10 border border-c-black-15 rounded-xl flex-shrink-0 3xl:w-72 xl:w-56 md:w-48 w-[11rem] md:px-4 px-2.5 md:py-4 py-2.5">
                                <img src="/images/thumbnail-5.jpg" alt="thumbnail" className="rounded-xl w-full" />
                                <Link href="/">
                                    <h3 className="mt-3 3xl:mb-4 mb-2 3xl:leading-7 3xl:text-1.5xl text-base text-white line-clamp-2 capitalize">avenger infinity war endgame</h3>
                                </Link>
                                <div className="flex justify-between max-md:flex-col text-c-grey-60 3xl:text-super-base text-sm">
                                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                                        <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> 1h 30min
                                    </div>
                                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                                        <EyeIcon className="w-5 h-5" /> 1.5k
                                    </div>
                                </div>
                                <div className="flex justify-between gap-1 text-c-grey-60 3xl:text-super-base text-super-xs text-center mt-2">
                                    <div className="bg-c-black-08 border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-4 px-2">
                                        <div className="flex items-center 3xl:gap-1 gap-0.5">
                                            <StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /><StarIcon className="3xl:w-5 w-3.5 3xl:h-5 h-3.5" /> 4.5K
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*//? END Most Popular Article */}

                </article>
                {/*//? END Movie article */}

            </section>
            {/*//? END Main Section */}


        </main>
    );
}

export default ExplorePage;