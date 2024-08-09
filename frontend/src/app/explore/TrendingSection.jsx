"use client";
import MovieCard from "@/components/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import SlidePagination from "@/components/SlidePagination";
import { useEffect, useRef, useState } from "react";



const TrendingSection = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const getTrendingMovies = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/trending-movies`);
            const data = await response.json();
            return data.movies;
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    }

    useEffect(() => {
        const getMovies = async () => {
            const data = await getTrendingMovies();
            console.log(data)
            setMovies(data);
            setLoading(false);
        };
        getMovies();
    }, []);


    const handleNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - 1));
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
                <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium">Our Genres</h5>
                <SlidePagination onNext={handleNext} onPrev={handlePrev} currentIndex={currentIndex} total={movies ? movies.length : 0} />
            </div>

            <div
                ref={scrollContainerRef}
                className="flex lg:gap-8 md:gap-4 gap-2.5 flex-nowrap overflow-x-auto pb-2.5 custom-scrollbar custom-scrollbar-sm"
            >
                {/* <MovieCardSkeleton />
                <MovieCard /> */}
                {loading || movies?.length === 0
                    ? Array.from({ length: 5 }).map((_, index) => <MovieCardSkeleton key={index} />)
                    : movies.map(({ _id, title, duration, thumbnail, views, averageRating }, index) => (
                        <MovieCard id={_id} title={title} image={thumbnail} duration={duration} view={views} rate={averageRating} />
                    ))}
            </div>
        </div>
    );
}

export default TrendingSection;