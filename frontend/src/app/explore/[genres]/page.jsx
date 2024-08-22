import MovieCard from "@/components/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import { fetchGenreMovies } from "@/services/MovieService";
import { Suspense } from "react";

export const fetchGenreSeries = async (genre) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/moviesByGenre/${genre}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching genre movies:", error);
        return [];
    }
}

const SingleGenresPage = async ({ params: { genres } }) => {
    const { movies } = await fetchGenreMovies(genres);

    return (
        <main className="container py-20 space-y-32">
            <div className="relative border border-c-black-15 rounded-xl xl:pt-8 xl:pb-10 pt-3 pb-10 lg:px-10 md:px-6 px-4">

                <h1
                    className="inline-flex absolute md:top-[-22.5px] top-[-19px] 3xl:text-super-base xl:text-base font-medium
                     text-super-sm items-center tracking-wide bg-c-red-45 text-white rounded-md px-6 md:h-[45px] h-[38px] capitalize"
                >
                    {genres} Genre Movies
                </h1>

                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-10">

                    <Suspense fallback={Array.from({ length: 5 }).map((_, index) => {
                        <MovieCardSkeleton special key={index} />
                    })}>
                        {movies.map(({ _id, title, duration, thumbnail, views, rate }) => (
                            <MovieCard special key={_id} id={_id} title={title} image={thumbnail} duration={duration} view={views} rate={rate} />
                        ))}
                    </Suspense>

                </div>

            </div>
            <div className="relative border border-c-black-15 rounded-xl xl:pt-8 xl:pb-10 pt-3 pb-10 lg:px-10 md:px-6 px-4">

                <h1
                    className="inline-flex absolute md:top-[-22.5px] top-[-19px] 3xl:text-super-base xl:text-base font-medium
                     text-super-sm items-center tracking-wide bg-c-red-45 text-white rounded-md px-6 md:h-[45px] h-[38px] capitalize"
                >
                    {genres} Genre Series
                </h1>

                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-10">

                    <Suspense fallback={<MovieCardSkeleton special />}>
                        {movies.map(({ _id, title, duration, thumbnail, views, rate }) => (
                            <MovieCard special key={_id} id={_id} title={title} image={thumbnail} duration={duration} view={views} rate={rate} />
                        ))}
                    </Suspense>

                    {/* {!loading && movies.map(({ _id, title, duration, thumbnail, views, averageRating }) => (
                        <MovieCard special key={_id} id={_id} title={title} image={thumbnail} duration={duration} view={views} rate={averageRating} />
                    ))}
                    {loading && Array.from({ length: 12 }).map((_, index) => (
                        <MovieCardSkeleton special key={index} />
                    ))} */}

                </div>

            </div>
        </main>
    );
}

export default SingleGenresPage;