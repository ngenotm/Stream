import { LeftArrowSvg, LikeSvg, PlaySvg, PlusSvg, SoundSvg } from "@/assets/Svgs";

const ExplorePage = () => {
    return (
        <main className="container mt-6">

            {/*//! START Carousel */}
            <header className="w-full h-[80vh] rounded-xl overflow-hidden flex items-center">


                {/*//! Single Carousel Item */}
                <div className="rounded-2xl relative w-full h-full overflow-hidden flex-shrink-0">
                    <img src="/images/carousel-banner.jpg" className="w-full h-full object-cover" alt="" />

                    {/*//! Overlay Effect */}
                    <div className="w-full h-[60%] bg-gradient-to-t from-c-black-08 via-c-black-08/70 via-55% to-c-black-08/0 absolute bottom-0"></div>

                    {/*//! Movie Info */}
                    <div
                        className="w-full flex flex-col items-center text-center absolute bottom-0 pb-7"
                    >

                        <h2 className="text-white font-semibold text-2.5xl">Avengers : Infinity War</h2>
                        <p className="text-c-grey-60 text-sm mb-6 w-8/12">
                            With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's
                            actions and undo the chaos to the universe, no matter what consequences may be in store, and no
                            matter who they face... Avenge the fallen.
                        </p>

                        <div className="flex md:flex-row flex-col items-center justify-center gap-3.5">
                            <button className="bg-c-red-45 text-white text-super-sm font-medium xl:h-10 h-11 px-5 flex items-center gap-1.5 rounded-md border-0 outline-none max-md:mt-3">
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
                        <div className="w-full flex items-center justify-between px-8 mt-7">
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

        </main>
    );
}

export default ExplorePage;