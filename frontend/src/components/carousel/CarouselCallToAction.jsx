import { LikeOutlineIcon,  PlaySvg, PlusSvg, SoundSvg } from "@/assets/Svgs";

const CarouselCallToAction = () => {
    return (
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
                    <LikeOutlineIcon />
                </button>
                <button
                    className="xl:h-11 h-11 xl:w-11 w-11 p-2.5 bg-c-black-06 border border-c-black-15 rounded-md flex items-center justify-center"
                >
                    <SoundSvg />
                </button>
            </div>
        </div>
    );
}

export default CarouselCallToAction;