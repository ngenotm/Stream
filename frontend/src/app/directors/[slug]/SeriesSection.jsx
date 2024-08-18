"use client";

import MovieCard from "@/components/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import SlidePagination from "@/components/SlidePagination";
import { useEffect, useRef, useState } from "react";


const SeriesSection = ({ fullName, seriesData }) => {
    const [series, setSeries] = useState(seriesData || []);
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);


    const handleNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, series.length - 1));
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
                    {`${fullName}'s series`}
                </h5>
                <SlidePagination onNext={handleNext} onPrev={handlePrev} currentIndex={currentIndex} total={series ? series.length : 0} />
            </div>

            <div
                ref={scrollContainerRef}
                className="flex lg:gap-8 gap-4 flex-nowrap overflow-x-auto pb-2.5 custom-scrollbar custom-scrollbar-sm"
            >
                {loading ?
                    Array.from({ length: 5 }).map((_, index) => <MovieCardSkeleton key={index} />)
                    : series.map(({ _id, title, totalEpisodes, thumbnail, views, rate }, index) => (
                        <MovieCard series id={_id} title={title} image={thumbnail} episodes={totalEpisodes} view={views} rate={rate} />
                    ))}
            </div>
        </div>
    );
}

export default SeriesSection;