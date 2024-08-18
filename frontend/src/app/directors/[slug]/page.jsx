import { LeftArrowSvg } from "@/assets/Svgs";
import SlidePagination from "@/components/SlidePagination";
import MovieSection from "./MovieSection";
import Biography from "./Biography";
import SeriesSection from "./SeriesSection";

const fetchDirector = async (slug) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/director/${slug}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching director:", error);
    }
}

const SingleDirectorPage = async ({ params }) => {
    const { slug } = params;

    const data = await fetchDirector(slug);


    if (!data) return <h1>loading...</h1>;

    const { director } = data;
    const { movies, series } = data;
    const { fullName, bio, country, birthDate, birthPlace, profile } = director;

    console.log(series)
    return (
        <main className="container md:pt-14 pt-5 md:pb-20 pb-10">
            <div className="grid grid-cols-12 gap-12">

                <section className="col-span-4">
                    <div className="rounded-3xl overflow-hidden relative bg-c-black-15">
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${profile}`}
                            alt={`${fullName} director`}
                            className="aspect-square object-cover rounded-3xl"
                        />
                        {/* <div className="absolute top-0 left-0 w-full h-3  bg-gradient-to-b from-c-black-08 via-c-black-08/45 via-50% to-c-black-08/0" />
                        <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-t from-c-black-08 via-c-black-08/45 via-50% to-c-black-08/0" />
                        <div className="absolute top-0 left-0 h-full w-3  bg-gradient-to-r from-c-black-08 via-c-black-08/45 via-50%  to-c-black-08/0" />
                        <div className="absolute top-0 right-0 h-full w-3  bg-gradient-to-l from-c-black-08 via-c-black-08/45 via-50%  to-c-black-08/0" /> */}
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
    );
}

export default SingleDirectorPage;