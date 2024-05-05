const { LeftArrowSvg } = require("@/assets/Svgs");

const SeasonItem = ({ seasonNumber, episodeCount, children }) => (
    <div className="bg-c-black-06 border border-c-black-15 rounded-xl xl:px-7 px-5 py-1">
        <div className="flex items-center justify-between py-3.5 border-b border-b-c-black-15">
            <div className="flex items-center gap-4">
                <h5 className="text-white 2xl:text-lg max-md:text-super-sm font-medium">Season {seasonNumber}</h5>
                <span className="text-c-grey-60 md:text-super-sm text-sm">{episodeCount} Episodes</span>
            </div>
            <button className="bg-c-black-08 border border-c-black-15 rounded-full w-10 h-10 flex justify-center items-center">
                <LeftArrowSvg className="stroke-c-grey-60 -rotate-90 w-[18px] h-[18px]" />
            </button>
        </div>
        {children}
    </div>
);

export default SeasonItem;