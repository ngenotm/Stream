const { CalendarIcon } = require("@/assets/Svgs");

const ReleasedMovie = ({ year }) => {
    return (
        <div>
            <p className="text-c-grey-60"><CalendarIcon className="w-4 mr-1.5" /> Released Year</p>
            <p className="font-medium text-white mt-2">{year}</p>
        </div>
    );
}

export default ReleasedMovie;