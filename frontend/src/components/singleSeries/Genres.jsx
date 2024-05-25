const { LanguageIcon } = require("@/assets/Svgs");

const Genres = ({ genres }) => (
    <div>
        <p className="text-c-grey-60"><LanguageIcon className="w-4 mr-1.5" /> Available Languages</p>
        <div className="flex flex-wrap gap-2.5 mt-2.5">
            {genres.map(genre => (
                <span
                    className="bg-c-black-08 border border-c-black-15 rounded-md px-4 py-1 text-white text-super-sm"
                >
                    {genre}
                </span>
            ))}
        </div>
    </div>
);

export default Genres;