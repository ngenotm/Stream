import { ClockIcon, EyeIcon, PlaySvg } from "@/assets/Svgs";
import Link from "next/link";
import StarRating from "./common/StarRating";

const MovieCard = ({ id, image, title, view, duration, rate }) => {
    return (
        <div
            className="bg-c-black-10 border border-c-black-15 rounded-xl flex-shrink-0 3xl:w-72 md:w-60 w-44 md:px-4 px-2.5 md:py-4 py-2.5"
        >
            <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`} alt={title}
                className="rounded-xl w-full aspect-thumbnail object-cover object-top"
            />
            <Link href="/">
                <h3 className="mt-3 3xl:mb-4 mb-2 3xl:leading-7 3xl:text-1.5xl text-base text-white line-clamp-2 capitalize">{title}</h3>
            </Link>
            <div className="flex justify-between max-md:flex-col text-c-grey-60 3xl:text-super-base text-sm">
                <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                    <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> {duration}
                </div>
                <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                    <EyeIcon className="w-5 h-5" /> {view}
                </div>
            </div>
            <div className="flex justify-between gap-1 text-c-grey-60 3xl:text-super-base text-super-xs text-center mt-2">
                <div className="bg-c-black-08 border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-4 px-2">
                    <StarRating rating={rate} />
                </div>
            </div>
            <button className="bg-c-red-45 w-full text-white text-super-sm font-medium rounded-lg py-1.5 mt-4">
                Play Now <PlaySvg className="inline w-6 h-6" />
            </button>
        </div>
    );
}

export default MovieCard;