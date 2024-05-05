const { StarIcon } = require("@/assets/Svgs");

const PreviewItem = ({ reviewerName, reviewerLocation, reviewText, rating }) => (
    <div
        className="py-4 px-4 bg-c-black-06 border border-c-black-15 rounded-lg
      lg:basis-[49%] flex-shrink-0 flex-grow-0 basis-full"
    >
        <div className="flex items-center justify-between">
            <div>
                <p className="text-white font-medium">{reviewerName}</p>
                <p className="text-c-grey-60 text-sm">{reviewerLocation}</p>
            </div>
            <div
                className="rounded-full bg-c-black-08 border border-c-black-15 px-4 pb-1.5 pt-0.5"
            >
                {/* Render StarIcon based on rating */}
                {[...Array(rating)].map((_, i) => <StarIcon key={i} />)}
                <span className="text-c-grey-60 text-lg ml-2">{rating}</span>
            </div>
        </div>
        <p className="mt-4 text-c-grey-60 lg:text-base text-sm">
            {reviewText}
        </p>
    </div>
);

export default PreviewItem;