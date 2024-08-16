import Link from "next/link";

const { EpisodeIcon } = require("@/assets/Svgs");

const Genres = ({ genres }) => (
    <div>
        <p className="text-c-grey-60"><EpisodeIcon className="w-[18px] mr-1.5 inline" /> Genres</p>
        <div className="flex flex-wrap gap-2.5 mt-2.5">
            {genres.map((genre, index) => (
                <Link
                    key={index} href={`/genres/${genre.toLowerCase()}`}
                    className="bg-c-black-08 hover:bg-c-black-10 border border-c-black-15 rounded-md px-4 py-1 text-white text-super-sm capitalize"
                >
                    {genre}
                </Link>
            ))}
        </div>
    </div>
);

export default Genres;