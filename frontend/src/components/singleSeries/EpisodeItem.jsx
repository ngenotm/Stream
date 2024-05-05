import { CirclePlayIcon, WatchSvg } from "@/assets/Svgs";

const EpisodeItem = ({ episodeNumber, episodeTitle, episodeDuration, episodeDescription, episodeImage }) => (
    <div className="flex items-center lg:py-6 py-4 2xl:gap-6 gap-3 border-b border-b-c-black-15">
        <span className="xl:text-2.5xl text-2xl text-c-grey-60 font-semibold">{episodeNumber}</span>
        <div className="flex-1 flex 2xl:gap-4 md:gap-2.5 md:flex-row flex-col">
            <div className="relative rounded-2xl overflow-hidden lg:w-52 md:w-56 border border-c-black-15">
                <img src={episodeImage} alt="" className="w-full h-full object-cover" />
                <button className="lg:w-[3.1rem] lg:h-[3.1rem] w-[3.4rem] h-[3.4rem] rounded-full flex justify-center items-center
            bg-black/60 hover:bg-black/80 transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <CirclePlayIcon className="lg:w-[27px] lg:h-[27px] w-[26px] h-[26px] stroke-white" />
                </button>
            </div>
            <div className="flex-1 flex flex-col justify-between py-2">
                <div className="flex xl:flex-row flex-col xl:items-center items-start max-xl:gap-3 max-md:gap-1.5 max-xl:mb-2 max-md:mb-0 justify-between">
                    <h4 className="text-white max-md:text-sm">{episodeTitle}</h4>
                    <span
                        className="bg-c-black-08 border border-c-black-15 rounded-md text-c-grey-60
                md:py-1.5 py-1 md:px-3.5 px-2.5 lg:text-super-sm md:text-sm text-super-xs flex items-center gap-1"
                    >
                        <WatchSvg className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]" /> {episodeDuration} min
                    </span>
                </div>
                <p className="text-c-grey-60 text-sm max-md:hidden lg:line-clamp-3 line-clamp-2">
                    {episodeDescription}
                </p>
            </div>
        </div>
    </div>
);

export default EpisodeItem;