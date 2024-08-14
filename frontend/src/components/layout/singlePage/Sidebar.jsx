import Director from "@/components/singleSeries/Director";
import Genres from "@/components/singleSeries/Genres";
import Languages from "@/components/singleSeries/Languages";
import Musician from "@/components/singleSeries/Musician";
import Rating from "@/components/singleSeries/Rating";
import ReleasedMovie from "@/components/singleSeries/ReleasedMovie";

const Sidebar = ({ releaseDate, language, rating, genres, director, musician }) => {
    return (
        <article
            className="lg:col-span-4 col-span-12 bg-c-black-10 border border-c-black-15 rounded-2xl
        xl:py-7 xl:px-7 md:px-5 md:py-5 px-3.5 py-3.5 lg:space-y-7 space-y-5 h-fit"
        >

            <ReleasedMovie year={releaseDate} />
            <Languages languages={[language]} />
            <Rating ratings={rating} />
            <Genres genres={genres} />
            <Director director={director} />
            <Musician musician={{ name: 'Kyle Dixon', country: 'USA', image: '/images/musician.jpg' }} />

        </article>
    );
}

export default Sidebar;