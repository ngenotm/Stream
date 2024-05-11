import { ClockIcon, EyeIcon, LeftArrowSvg, LikeSvg, PlaySvg, PlusSvg, SoundSvg, StarIcon } from "@/assets/Svgs";
import GenresCard from "@/components/GenresCard";
import SlidePagination from "@/components/SlidePagination";
import Link from "next/link";

const ExplorePage = () => {
    return (
        <main className="container mt-6 mb-40">

            {/*//! START Carousel */}
            <header className="w-full h-[80vh] rounded-xl overflow-hidden flex items-center">


                {/*//! Single Carousel Item */}
                <div className="rounded-2xl relative w-full h-full overflow-hidden flex-shrink-0">
                    <img src="/images/carousel-banner.jpg" className="w-full h-full object-cover" alt="" />

                    {/*//! Overlay Effect */}
                    <div className="w-full md:h-[60%] h-[80%] bg-gradient-to-t from-c-black-08 via-c-black-08/70 via-55% to-c-black-08/0 absolute bottom-0"></div>

                    {/*//! Movie Info */}
                    <div
                        className="w-full flex flex-col items-center text-center absolute bottom-0 pb-7"
                    >

                        <h2 className="text-white font-semibold text-2.5xl">Avengers : Infinity War</h2>
                        <p className="text-[#bbbbbb] lg:text-sm text-super-xs line-clamp-3 md:mb-6 mb-2 lg:w-8/12 md:w-4/5 max-md:px-2.5">
                            With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's
                            actions and undo the chaos to the universe, no matter what consequences may be in store, and no
                            matter who they face... Avenge the fallen.
                        </p>

                        <div className="flex md:flex-row flex-col items-center justify-center gap-3.5">
                            <button className="bg-c-red-45 text-white text-super-sm font-medium xl:h-10 md:h-11 h-10 px-5 flex items-center gap-1.5 rounded-md border-0 outline-none max-md:mt-3">
                                <PlaySvg className="w-[27px]" /> Play Now
                            </button>
                            <div className="flex items-center gap-2.5">
                                <button
                                    className="xl:h-11 h-11 xl:w-11 w-11 p-2.5 bg-c-black-06 border border-c-black-15 rounded-md flex items-center justify-center"
                                >
                                    <PlusSvg />
                                </button>
                                <button
                                    className="xl:h-11 h-11 xl:w-11 w-11 p-2.5 bg-c-black-06 border border-c-black-15 rounded-md flex items-center justify-center"
                                >
                                    <LikeSvg />
                                </button>
                                <button
                                    className="xl:h-11 h-11 xl:w-11 w-11 p-2.5 bg-c-black-06 border border-c-black-15 rounded-md flex items-center justify-center"
                                >
                                    <SoundSvg />
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between md:px-8 px-4 mt-7">
                            <button
                                className="w-11 h-11 btn-black-06 border border-c-black-12 rounded-md flex items-center justify-center"
                            >
                                <LeftArrowSvg className="w-[17px] h-[17px] stroke-white" />
                            </button>
                            <div className="flex items-center gap-1">
                                <div className="h-[3px] 3xl:min-w-5 min-w-4 cursor-pointer duration-300 rounded-full 3xl:w-9 w-7 bg-c-red-45"></div>
                                <div className="h-[3px] 3xl:min-w-5 min-w-4 cursor-pointer duration-300 rounded-full bg-c-black-20"></div>
                                <div className="h-[3px] 3xl:min-w-5 min-w-4 cursor-pointer duration-300 rounded-full bg-c-black-20"></div>
                                <div className="h-[3px] 3xl:min-w-5 min-w-4 cursor-pointer duration-300 rounded-full bg-c-black-20"></div>
                            </div>
                            <button
                                className="w-11 h-11 btn-black-06 border border-c-black-12 rounded-md flex items-center justify-center"
                            >
                                <LeftArrowSvg className="w-[17px] h-[17px] stroke-white rotate-180" />
                            </button>
                        </div>

                    </div>
                </div>



            </header>
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