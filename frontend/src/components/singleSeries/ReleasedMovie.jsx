const { CalendarIcon } = require("@/assets/Svgs");

const ReleasedMovie = ({ custom, year }) => {
    return (
        <div>
            <p className="text-c-grey-60">
                <CalendarIcon className={`${custom ? "w-[18px]" : "w-4"} mr-1.5`} />
                Released Year
            </p>
            <p className={custom ? "text-white inline-block mt-3 px-7 py-1.5 bg-c-black-08 border border-c-black-15 rounded-md" :
                "font-medium text-white mt-2"}
            >{year}</p>
        </div>
    );
}

export default ReleasedMovie;