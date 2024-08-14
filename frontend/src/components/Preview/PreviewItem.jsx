import StarRating from "../common/StarRating";

const PreviewItem = ({ fullName, text, rating }) => (
    <div
        className="py-4 px-4 bg-c-black-06 border border-c-black-15 rounded-lg
      lg:basis-[49%] flex-shrink-0 flex-grow-0 basis-full "
    >
        <div className="flex items-center justify-between">
            <div>
                <p className="text-white font-medium capitalize">{fullName}</p>
                {/* <p className="text-c-grey-60 text-sm">{reviewerLocation}</p> */}
            </div>
            <div
                className="rounded-full bg-c-black-08 border border-c-black-15 px-4 pb-1.5 pt-0.5"
            >
                <StarRating rating={rating} />
            </div>
        </div>
        <p className="mt-4 text-c-grey-60 lg:text-base text-sm">
            {text}
        </p>
    </div>
);

export default PreviewItem;