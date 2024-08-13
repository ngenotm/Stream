const { LanguageIcon, CameraIcon, EpisodeIcon } = require("@/assets/Svgs");

const Genres = ({ genres }) => (
    <div>
        <p className="text-c-grey-60"><EpisodeIcon className="w-4 mr-1.5 inline" /> Genres</p>
        <div className="flex flex-wrap gap-2.5 mt-2.5">
            {genres.map((genre, index) => (
                <span
                    className="bg-c-black-08 border border-c-black-15 rounded-md px-4 py-1 text-white text-super-sm"
                    key={index}
                >
                    {genre}
                </span>
            ))}
        </div>
    </div>
);

export default Genres;