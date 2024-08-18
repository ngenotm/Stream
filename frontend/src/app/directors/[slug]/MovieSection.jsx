"use client";

import MovieCard from "@/components/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import SlidePagination from "@/components/SlidePagination";
import { useEffect, useRef, useState } from "react";



const MovieSection = ({ fullName, moviesData }) => {
    const [movies, setMovies] = useState(moviesData || []);
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    console.log(movies)

    const handleNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, movies.length - 1));
        }
    };

    const handlePrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    return (
        <div className="mt-9">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium">
                    {`${fullName}'s movies`}
                </h5>
                <SlidePagination onNext={handleNext} onPrev={handlePrev} currentIndex={currentIndex} total={movies ? movies.length : 0} />
            </div>

            <div
                ref={scrollContainerRef}
                className="flex lg:gap-8 gap-4 flex-nowrap overflow-x-auto pb-2.5 custom-scrollbar custom-scrollbar-sm"
            >
                {loading ?
                    Array.from({ length: 5 }).map((_, index) => <MovieCardSkeleton key={index} />) : movies?.length == 0 ? <span className="text-c-grey-60">No films available for this director at the moment.</span>
                    : movies.map(({ _id, title, duration, thumbnail, views, rate }, index) => (
                        <MovieCard id={_id} title={title} image={thumbnail} duration={duration} view={views} rate={rate} />
                    ))}
            </div>
        </div>
    );
}

export default MovieSection;