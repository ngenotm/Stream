"use client";

import MovieCard from "@/components/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import { fetchDirectorSeries } from "@/services/DirectorService";
import { useEffect, useRef, useState } from "react";


const DirectorSeriesPage = ({ params: { slug: directorId } }) => {
    const [director, setDirector] = useState(null);
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState(false);

    const effectRan = useRef(false);

    const fetchSeries = async (currentPage) => {
        setLoading(true);
        try {
            const data = await fetchDirectorSeries(directorId, currentPage, page);
            setSeries(prevSeries => [...prevSeries, ...data.series]);
            setHasNextPage(data.pagination.hasNextPage);
            setDirector(data.director.fullName);
        } catch (error) {
            console.error("Error fetching series:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (effectRan.current === false) {
            fetchSeries();
            return () => {
                effectRan.current = true;
            }
        }
    }, [directorId, page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
        fetchSeries(page + 1);
    };

    return (
        <main className="container md:pt-14 pt-5 md:pb-20 pb-10">

            <h1 className="text-white text-2xl font-medium">
                Movies Directed by <span className="capitalize">{director}</span>
            </h1>

            <div className="grid grid-cols-5 gap-8 mt-10">

                {!loading && series.map(({ _id, title, totalEpisodes, thumbnail, views, rate }) => (
                    <MovieCard key={_id} id={_id} title={title} image={thumbnail} episodes={totalEpisodes} view={views} rate={rate} />
                ))}
                {loading && Array.from({ length: 12 }).map((_, index) => (
                    <MovieCardSkeleton key={index} />
                ))}

            </div>

            {hasNextPage && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={loadMore}
                        className="bg-c-red-45 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2"
                        disabled={loading}
                    >
                        {loading ? 'Loading' : 'Load More'}
                        <div className={loading ? "block" : "hidden"} role="status">
                            <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-black/70" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </button>
                </div>
            )};

        </main>
    );
}

export default DirectorSeriesPage;