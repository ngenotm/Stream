import { CalendarIcon, DownloadIcon, EpisodeIcon, LeftArrowSvg, OutlineStarIcon, PlusSvg } from "@/assets/Svgs";
import StarRating from "@/components/common/StarRating";
import ReviewItem from "@/components/review/ReviewItem";
import ActorItem from "@/components/singleSeries/ActorItem";
import Link from "next/link";

const SingleEpisodePage = ({ params }) => {
    const { season, episode } = params;
    return (
        <main className="container pt-10 pb-20">
            <div className="w-[85%] mx-auto  space-y-6">

                <section className="bg-c-black-10 border border-c-black-15 xl:p-9 md:px-5 md:py-5 px-3.5 py-3.5 rounded-2.5xl">
                    <div className="aspect-video rounded-[0.9rem] overflow-hidden">
                        <video
                            src="/images/short-video.mp4"
                            poster={`${process.env.NEXT_PUBLIC_IMAGE_URL}/halo_episode1_season1.jpg`}
                            className="w-full"
                            controls
                        />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-3xl font-semibold text-white">Halo - Episode 1</h1>
                        <p className="mt-2 text-lg font-medium text-c-grey-70">Season {season} - Episode {episode}</p>
                        <p className="mt-3 text-c-grey-65 text-lg">
                            The Vanishing of Will Byers Episode 1 Season 1
                        </p>
                    </div>
                </section>

                <section className="bg-c-black-10 border border-c-black-15 xl:p-9 md:px-5 md:py-5 px-3.5 py-3.5 rounded-2.5xl">

                    <h4
                        className="text-white md:text-xl text-lg font-medium lg:mb-8 md:mb-5 mb-1.5"
                    >
                        {/* Rating & Genres */}
                        Series Info
                    </h4>

                    <p className="text-c-grey-60 text-super-base"><OutlineStarIcon className="w-5 mr-1.5" /> Ratings</p>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3 mt-3">
                        <div className="bg-c-black-08 border border-c-black-15 rounded-lg py-3.5 px-4 text-white">
                            <p className=" capitalize">Imdb</p>
                            <div>
                                <StarRating rating={4} />
                            </div>
                        </div>
                        <div className="bg-c-black-08 border border-c-black-15 rounded-lg py-3.5 px-4 text-white">
                            <p className=" capitalize">Rotten Tomatoes</p>
                            <div>
                                <StarRating rating={4} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-8">

                        <div>
                            <p className="text-c-grey-60 text-super-base"><EpisodeIcon className="w-5 mr-1.5 inline" /> Genres</p>
                            <div className="flex flex-wrap gap-2.5 mt-3">
                                <Link
                                    href={`/genres/`}
                                    className="bg-c-black-08 hover:bg-c-black-10 border border-c-black-15 
                            rounded-md px-7 py-1.5 text-white  capitalize"
                                >
                                    action
                                </Link>
                                <Link
                                    href={`/genres/`}
                                    className="bg-c-black-08 hover:bg-c-black-10 border border-c-black-15 
                            rounded-md px-7 py-1.5 text-white  capitalize"
                                >
                                    drama
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-c-grey-60"><CalendarIcon className="w-[18px] mr-1.5" /> Released Year</p>
                            <p
                                className="text-white inline-block mt-3 px-7 py-1.5 bg-c-black-08 border border-c-black-15 rounded-md"
                            >
                                2024
                            </p>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-8">

                        <div>
                            <p className="text-c-grey-60 text-super-base">Director</p>
                            <div className="flex bg-c-black-08 border border-c-black-15 rounded-lg p-3.5 mt-2.5">
                                <Link href={`/directors/`}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Christopher_Nolan.jpg`}
                                        alt={`director`}
                                        className="w-16 h-16 object-cover object-center rounded-lg mr-3"
                                    />
                                </Link>
                                <div className="flex flex-col justify-around capitalize">
                                    <Link href={`/directors/`} >
                                        <h5 className="text-white tracking-wide">amirreza rostami</h5>
                                    </Link>
                                    <span className="block text-c-grey-60 text-super-sm">From Mianeh</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-c-grey-60 text-super-base">Musician</p>
                            <div className="flex bg-c-black-08 border border-c-black-15 rounded-lg p-3.5 mt-2.5">
                                <img
                                    src="/images/musician.jpg"
                                    alt=""
                                    className="w-16 h-16 object-cover object-center rounded-lg mr-3"
                                />
                                <div className="flex flex-col justify-around capitalize">
                                    <h5 className="text-white tracking-wide">amirreza rostami</h5>
                                    <span className="block text-c-grey-60 text-super-sm">From mianeh</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <section
                    className="bg-c-black-10 border border-c-black-15 xl:p-9 md:px-5 md:py-5 px-3.5 py-3.5 rounded-2.5xl"
                >
                    <div className="flex items-center justify-between lg:mb-5 mb-4">
                        <h4 className="text-c-grey-60 xl:text-lg text-super-base font-medium">Actors</h4>
                        <div className="flex gap-2.5">
                            <button
                                className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.9rem] h-[2.9rem]"
                            >
                                <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px]" />
                            </button>
                            <button
                                className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.9rem] h-[2.9rem]"
                            >
                                <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px] rotate-180" />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4 overflow-x-auto custom-scrollbar custom-scrollbar-sm pb-2.5">
                        <ActorItem id={"actorId"} fullName={"Pablo Schreiber"} profile={"gD1UAvScU.jpg"} />
                    </div>
                </section>


                <section
                    className="bg-c-black-10 border border-c-black-15 xl:p-9 md:px-5 md:py-5 px-3.5 py-3.5 rounded-2.5xl"
                >
                    <h4
                        className="text-white md:text-xl text-lg font-medium lg:mb-8 md:mb-5 mb-1.5"
                    >
                        Download Links
                    </h4>


                    <div
                        className="bg-c-black-08 border border-c-black-15 rounded-lg mt-8 px-6 py-4 grid grid-cols-5 gap-10"
                    >
                        <div className="col-span-2">
                            <p className="text-c-grey-60 text-super-base mb-1">Quality</p>
                            <p className="text-white tracking-wide text-super-sm">1080p</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-c-grey-60 text-super-base mb-1">Size</p>
                            <p className="text-white tracking-wide text-super-sm">1.2 GB</p>
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                className="bg-c-black-10 hover:bg-c-black-12 border border-c-black-15 rounded-lg 
                                py-2 px-6 max-md:text-super-sm text-c-grey-70 flex items-center"
                            >
                                Download <DownloadIcon className="w-5 ml-2" />
                            </button>
                        </div>
                    </div>

                </section>



                <section
                    className="bg-c-black-10 border border-c-black-15 xl:p-9 md:px-5 md:py-5 px-3.5 py-3.5 rounded-2.5xl"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="text-c-grey-60 text-lg font-medium">Reviews</h4>
                        <div className="flex items-center gap-10">
                            <button
                                className="btn-black-08 border border-c-black-15 rounded-lg py-2 px-3 max-md:text-super-sm text-white/90"
                            >
                                <PlusSvg className="inline mr-1" /> Add Your Review
                            </button>
                            <div className="flex gap-2.5">
                                <button
                                    className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.9rem] h-[2.9rem]"
                                // onClick={prev}
                                >
                                    <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px]" />
                                </button>
                                <button
                                    className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.9rem] h-[2.9rem]"
                                // onClick={next}
                                >
                                    <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px] rotate-180" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex 3xl:gap-6 lg:gap-[2%] gap-4 flex-nowrap overflow-x-auto custom-scrollbar custom-scrollbar-sm pb-2.5"
                    >

                        <ReviewItem
                            fullName={"amirreza rostami"}
                            text={"test"}
                            rating={3}
                        />

                    </div>
                </section>

            </div>
        </main>
    );
}

export default SingleEpisodePage;