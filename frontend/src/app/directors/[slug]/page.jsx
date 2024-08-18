import MovieSection from "./MovieSection";
import Biography from "./Biography";
import SeriesSection from "./SeriesSection";
import { fetchDirector } from "@/services/DirectorService";
import DirectorPageSkeleton from "./DirectorPageSkeleton";


const SingleDirectorPage = async ({ params }) => {
    const { slug } = params;

    const data = await fetchDirector(slug);

    if (!data) return <DirectorPageSkeleton />;


    const { director } = data;
    const { movies, series } = data;
    const { fullName, bio, country, birthDate, birthPlace, profile } = director;

    return (
        <>
            <main className="container md:pt-14 pt-5 md:pb-20 pb-10">
                <div className="grid grid-cols-12 gap-12">

                    <section className="col-span-4">
                        <div className="rounded-3xl overflow-hidden relative bg-c-black-15 border-2 border-c-black-15">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${profile}`}
                                alt={`${fullName} director`}
                                className="aspect-square object-cover rounded-3xl"
                            />
                        </div>
                    </section>

                    <section
                        className="col-span-8 space-y-6"
                    >

                        <div
                            className="bg-c-black-10 border border-c-black-15 rounded-2.5xl xl:px-8 xl:py-6 md:px-5 md:py-5 px-3.5 py-3.5"
                        >
                            <h1 className="text-white text-2xl tracking-wide capitalize">{fullName}
                            </h1>
                            <div className="mt-8 space-y-5">

                                <div className="tracking-wide">
                                    <p className="text-c-grey-60 md:text-super-base mb-0.5">Born</p>
                                    <p>
                                        <span className="text-white text-super-sm capitalize">{`${birthDate}, ${birthPlace}, ${country}`}</span>
                                    </p>
                                </div>
                                <div className="tracking-wide">
                                    <p className="text-c-grey-60 md:text-super-base mb-0.5">Awards</p>
                                    <p>
                                        <span className="text-white text-super-sm">Academy Award for Best Original Screenplay</span>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <Biography bio={bio} />

                    </section>
                </div>

                <MovieSection fullName={"Christopher Nolan"} moviesData={movies} />

                <SeriesSection fullName={"Christopher Nolan"} seriesData={series} />

            </main>
        </>
    );
}

export default SingleDirectorPage;