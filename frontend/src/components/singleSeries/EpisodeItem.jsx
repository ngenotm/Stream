import { CirclePlayIcon, DownloadIcon, WatchSvg } from "@/assets/Svgs";
import Link from "next/link";

const EpisodeItem = ({ seriesId, seriesTitle, episodeNumber, seasonNumber, title, runtime, description, thumbnail }) => {
    return (
        <div className="flex items-center lg:py-6 py-4 2xl:gap-6 gap-3 border-b border-b-c-black-15 last:border-b-0">
            <span className="xl:text-2xl text-1.5xl text-c-grey-60 font-semibold">
                {episodeNumber}
            </span>
            <div className="flex-1 flex 2xl:gap-4 md:gap-2.5 md:flex-row flex-col">
                <div className="relative rounded-2xl overflow-hidden lg:w-52 md:w-56 border border-c-black-15">
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${thumbnail}`}
                        alt={`${seriesTitle} Season ${seasonNumber} Episode ${episodeNumber}`}
                        className="w-full h-full object-cover object-center"
                    />
                    <button className="lg:w-[3.1rem] lg:h-[3.1rem] w-[3.4rem] h-[3.4rem] rounded-full flex justify-center items-center
            bg-black/60 hover:bg-black/80 transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <CirclePlayIcon className="lg:w-[27px] lg:h-[27px] w-[26px] h-[26px] stroke-white" />
                    </button>
                </div>
                <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex xl:flex-row flex-col items-start max-xl:gap-3 max-md:gap-1.5 max-xl:mb-2 max-md:mb-0 justify-between">
                        <h4 className="text-white max-md:text-sm line-clamp-2">{title}</h4>
                        <div className="flex flex-col items-end gap-2.5">
                            <span
                                className="bg-c-black-08 border border-c-black-15 rounded-md text-c-grey-60
                md:py-1.5 py-1 md:px-3.5 px-2.5 lg:text-super-sm md:text-sm text-super-xs flex items-center gap-1"
                            >
                                <WatchSvg className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]" /> {runtime} min
                            </span>
                            <Link href={`/series/${seriesId}/${seasonNumber}/${episodeNumber}`}>
                                <button
                                    className="rounded-full flex items-center justify-center bg-c-black-08 
                                border border-c-black-15 p-2"
                                >
                                    <DownloadIcon className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-c-grey-60 text-sm max-md:hidden lg:line-clamp-3 line-clamp-2">
                        {!description || description === "" ? "No description available yet!" : description}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default EpisodeItem;