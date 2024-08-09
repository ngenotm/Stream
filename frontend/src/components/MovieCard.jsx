import { ClockIcon, EyeIcon } from "@/assets/Svgs";
import Link from "next/link";
import StarRating from "./common/StarRating";

const MovieCard = ({ image, title, view, duration, rate }) => {
    return (
        <div
            className="bg-c-black-10 border border-c-black-15 rounded-xl flex-shrink-0 3xl:w-72 xl:w-56 md:w-48 w-[11rem] md:px-4 px-2.5 md:py-4 py-2.5"
        >
            <img
                src={"/images/thumbnail-6.jpg"} alt="thumbnail"
                className="rounded-xl w-full aspect-thumbnail object-cover object-top"
            />
            <Link href="/">
                <h3 className="mt-3 3xl:mb-4 mb-2 3xl:leading-7 3xl:text-1.5xl text-base text-white line-clamp-2 capitalize">Avengers End Game</h3>
            </Link>
            <div className="flex justify-between max-md:flex-col text-c-grey-60 3xl:text-super-base text-sm">
                <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                    {/* <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> {time} */}
                    <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> 23
                </div>
                <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                    {/* <EyeIcon className="w-5 h-5" /> {views} */}
                    <EyeIcon className="w-5 h-5" /> 759
                </div>
            </div>
            <div className="flex justify-between gap-1 text-c-grey-60 3xl:text-super-base text-super-xs text-center mt-2">
                <div className="bg-c-black-08 border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-4 px-2">
                    <StarRating rating={0.5} />
                </div>
            </div>
        </div>
    );
}

export default MovieCard;