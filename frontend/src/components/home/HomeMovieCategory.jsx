import Link from "next/link";
import GenresCard from "../GenresCard";
import MovieCategoryTitle from "./MovieCategoryTitle";
import { RightArrowSvg } from "@/assets/Svgs";

const HomeMovieCategory = () => {
    return (
        <section className="container mt-14">

            <MovieCategoryTitle />

            <div
                className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-4 gap-2.5 flex-nowrap max-lg:overflow-x-auto"
            >

                <Link href="/" className="flex-shrink-0 max-lg:w-[200px] max-sm:w-[11rem]">
                    <div className="lg:px-5 md:px-4 md:py-4 p-3 bg-c-black-10 border border-c-black-15 rounded-xl relative  duration-300 cursor-pointer">

                        <div>
                            <div className="grid grid-cols-2">
                                <img src="/images/thumbnail-1.jpg" alt="movie name" className="w-full rounded-xl aspect-square" />
                                <img src="/images/thumbnail-2.jpg" alt="movie name" className="w-full rounded-xl aspect-square" />
                            </div>
                            <div className="grid grid-cols-2">
                                <img src="/images/thumbnail-3.jpg" alt="movie name" className="w-full rounded-xl aspect-square" />
                                <img src="/images/thumbnail-4.jpg" alt="movie name" className="w-full rounded-xl aspect-square" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <h4 className="font-medium text-white">Action</h4>
                            <button><RightArrowSvg /></button>
                        </div>

                    </div>
                </Link>

            </div>

        </section>
    );
}

export default HomeMovieCategory;