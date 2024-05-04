import { CirclePlayIcon, LeftArrowSvg, LikeSvg, PlaySvg, PlusSvg, SoundSvg, StarIcon, WatchIcon, WatchSvg } from "@/assets/Svgs";
import SubscriptionBox from "@/components/SubscriptionBox";

const SingleSeries = ({ params }) => {
    return (
        <main className="container py-6">

            <div className="top-banner-box relative w-full xl:h-[80vh] md:h-[60vh] h-[42vh] -z-10 border-b">
                <img src="/images/series-banner.jpg" alt="series" className="w-full h-full object-cover object-center rounded-xl" />

                <div className="w-full absolute bottom-0 md:mb-10 mb-8 text-center md:px-20 px-4">
                    <h1 className="text-2xl text-white font-semibold">Stranger Things</h1>
                    <p className="md:text-c-grey-60 text-c-grey-90 2xl:text-base xl:text-super-sm text-sm md:mt-3 mt-1 mb-5 md:block hidden">
                        When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                    </p>
                    <div className="flex md:flex-row flex-col items-center justify-center gap-3.5">
                        <button className="bg-c-red-45 text-white font-medium xl:h-12 h-11 px-6 flex items-center gap-1.5 rounded-md border-0 outline-none max-md:mt-3">
                            <PlaySvg width={28} /> Play Now
                        </button>
                        <div className="flex items-center gap-2.5">
                            <button
                                className="xl:h-12 h-11 xl:w-12 w-11 bg-c-black-06 border border-c-black-15 rounded-md flex items-center justify-center"
                            >
                                <PlusSvg />
                            </button>
                            <button
                                className="xl:h-12 h-11 xl:w-12 w-11 bg-c-black-06 border border-c-black-15 rounded-md flex items-center justify-center"
                            >
                                <LikeSvg />
                            </button>
                            <button
                                className="xl:h-12 h-11 xl:w-12 w-11 bg-c-black-06 border border-c-black-15 rounded-md flex items-center justify-center"
                            >
                                <SoundSvg />
                            </button>
                        </div>
                    </div>
                </div>

            </div>



            <section className="grid grid-cols-12 xl:gap-8 gap-5 mt-24 mb-12 min-h-screen">

                <article
                    className="md:col-span-8 col-span-12 space-y-6"
                >

                    {/*//! START Seasons List Section */}
                    <div className="bg-c-black-10 border border-c-black-15 rounded-2xl flex flex-col gap-4 xl:py-7 xl:px-7 md:px-5 md:py-5 px-3.5 py-3.5">
                        <h4 className="text-white text-xl font-medium lg:mb-7 md:mb-5 mb-3">Seasons and Episodes</h4>

                        <div className="flex flex-col gap-4">
                            {/*//TODO Season Item */}
                            <div className="bg-c-black-06 border border-c-black-15 rounded-xl xl:px-7 px-5 py-1">
                                <div className="flex items-center justify-between py-3.5">
                                    <div className="flex items-center gap-4">
                                        <h5 className="text-white 2xl:text-lg  font-medium">Season 1</h5>
                                        <span className="text-c-grey-60 text-super-sm">9 Episodes</span>
                                    </div>
                                    <button className="bg-c-black-08 border border-c-black-15 rounded-full w-10 h-10 flex justify-center items-center">
                                        <LeftArrowSvg className="stroke-c-grey-60 -rotate-90 w-[18px] h-[18px]" />
                                    </button>
                                </div>
                            </div>

                            {/*//TODO Season Item */}
                            <div className="bg-c-black-06 border border-c-black-15 rounded-xl xl:px-7 px-5 py-1">
                                <div className="flex items-center justify-between py-3.5 border-b border-b-c-black-15">
                                    <div className="flex items-center gap-4">
                                        <h5 className="text-white 2xl:text-lg  font-medium">Season 1</h5>
                                        <span className="text-c-grey-60 text-super-sm">9 Episodes</span>
                                    </div>
                                    <button className="bg-c-black-08 border border-c-black-15 rounded-full w-10 h-10 flex justify-center items-center">
                                        <LeftArrowSvg className="stroke-c-grey-60 -rotate-90 w-[18px] h-[18px]" />
                                    </button>
                                </div>

                                {/*//! START Episodes Section */}
                                <div className="">

                                    {/*//TODO Episode Item */}
                                    <div className="flex items-center lg:py-6 py-4 2xl:gap-6 gap-3 border-b border-b-c-black-15">
                                        <span className="xl:text-2.5xl text-2xl text-c-grey-60 font-semibold">01</span>

                                        {/*//* episode info */}
                                        <div className="flex-1 flex 2xl:gap-4 md:gap-2.5 flex-col">

                                            {/*//* Image Section */}
                                            <div className="relative rounded-2xl overflow-hidden lg:w-52 border border-c-black-15">
                                                <img src="/images/series-banner.jpg" alt="" className="w-full h-full object-cover" />
                                                <button className="lg:w-[3.1rem] lg:h-[3.1rem] w-[3.4rem] h-[3.4rem] rounded-full flex justify-center items-center
                                                 bg-black/60 hover:bg-black/80 transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                                    <CirclePlayIcon className="lg:w-[27px] lg:h-[27px] w-[26px] h-[26px] stroke-white" />
                                                </button>
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between py-2">
                                                <div className="flex xl:flex-row flex-col xl:items-center items-start max-xl:gap-3 max-md:gap-1.5 max-xl:mb-2 max-md:mb-0 justify-between">
                                                    <h4 className="text-white">Chapter One : The Vanishing of Will Byers</h4>
                                                    <span
                                                        className="bg-c-black-08 border border-c-black-15 rounded-md text-c-grey-60
                                                         py-1.5 px-3.5 lg:text-super-sm md:text-sm text-super-xs flex items-center gap-1"
                                                    >
                                                        <WatchSvg className="md:w-[20px] md:h-[20px] w-[18px] h-[18px]" /> 49 min
                                                    </span>
                                                </div>
                                                <p className="text-c-grey-60 text-sm max-lg:hidden">
                                                    On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                {/*//? END Episodes Section */}
                            </div>

                        </div>


                    </div>
                    {/*//? END Seasons List Section */}


                    {/*//! START Description Section */}
                    <div className="bg-c-black-10 border border-c-black-15 rounded-2xl xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5">
                        <h4 className="text-c-grey-60 xl:text-lg font-medium mb-2">Description</h4>

                        <p className="text-white 2xl:text-base xl:text-super-sm md:text-sm text-super-xs">
                            When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
                            terrifying supernatural forces and one strange little girl.
                        </p>
                    </div>
                    {/*//? END Description List Section */}


                    {/*//! START Cast Section */}
                    <div className="bg-c-black-10 border border-c-black-15 rounded-2xl xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5">
                        <div className="flex items-center justify-between lg:mb-3 mb-4">
                            <h4 className="text-c-grey-60 xl:text-lg text-super-base font-medium">Cast</h4>
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
                        {/*//TODO Cast pictures */}
                        <div className="flex gap-4">
                            <img src="/images/cast-2.jpg" alt="cast" className="rounded-2xl" />
                            <img src="/images/cast-2.jpg" alt="cast" className="rounded-2xl" />
                        </div>
                    </div>
                    {/*//? END Cast List Section */}


                    {/*//! START Previews Section */}
                    <div className="bg-c-black-10 border border-c-black-15 rounded-2xl xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-c-grey-60 text-lg font-medium">Previews</h4>
                            <button className="btn-black-08 border border-c-black-15 rounded-lg py-2 px-3 max-md:text-super-sm text-white/90">
                                <PlusSvg className="inline mr-1" /> Add Your Review
                            </button>
                        </div>

                        <div className="flex 3xl:gap-6 lg:gap-[2%] gap-4 flex-wrap">

                            {/*//TODO Single Preview Item */}
                            <div
                                className="py-4 px-4 bg-c-black-06 border border-c-black-15 rounded-lg
                                lg:basis-[49%] flex-shrink-0 flex-grow-0 basis-full"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium">Aniket Roy</p>
                                        <p className="text-c-grey-60 text-sm">From India</p>
                                    </div>
                                    <div
                                        className="rounded-full bg-c-black-08 border border-c-black-15 px-4 pb-1.5 pt-0.5"
                                    >
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <span className="text-c-grey-60 text-lg ml-2">5</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-c-grey-60 lg:text-base text-sm">
                                    This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.
                                </p>
                            </div>

                            {/*//TODO Single Preview Item */}
                            <div
                                className="py-4 px-4 bg-c-black-06 border border-c-black-15 rounded-lg
                                lg:basis-[49%] flex-shrink-0 flex-grow-0 basis-full"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium">Aniket Roy</p>
                                        <p className="text-c-grey-60 text-sm">From India</p>
                                    </div>
                                    <div
                                        className="rounded-full bg-c-black-08 border border-c-black-15 px-4 pb-1.5 pt-0.5"
                                    >
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <span className="text-c-grey-60 text-lg ml-2">5</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-c-grey-60 lg:text-base text-sm">
                                    This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.
                                </p>
                            </div>



                        </div>

                        {/*//TODO Preview Pagination */}
                        <div className="flex justify-center">
                            <div className="rounded-xlp-2.5 lg:flex items-center mt-6">

                                <div className="flex items-center gap-2">
                                    <button
                                        className="w-11 h-11 rounded-full btn-black-08 border border-c-black-15
                                         flex justify-center items-center"
                                    ><LeftArrowSvg className="stroke-c-grey-60 w-[18px] h-[18px]" /></button>
                                    <div className="flex items-center gap-1">
                                        <div className="h-[2px] min-w-3 w-5 bg-c-red-45"></div>
                                        <div className="h-[2px] min-w-3 bg-c-black-20"></div>
                                        <div className="h-[2px] min-w-3 bg-c-black-20"></div>
                                        <div className="h-[2px] min-w-3 bg-c-black-20"></div>
                                    </div>
                                    <button
                                        className="w-11 h-11 rounded-full btn-black-08 border border-c-black-15
flex justify-center items-center"
                                    ><LeftArrowSvg className="stroke-c-grey-60 w-[18px] h-[18px] rotate-180" /></button>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/*//? END Previews List Section */}


                </article>
                <article
                    className="md:col-span-4 col-span-12 min-h-screen bg-c-black-10 border border-c-black-15 rounded-2xl 
                    xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5"
                >
                    <p className="text-white ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, nostrum.</p>
                </article>

            </section>

            <SubscriptionBox />



        </main>
    );
}

export default SingleSeries;