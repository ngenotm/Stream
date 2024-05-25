import { OutlineStarIcon, StarIcon } from "@/assets/Svgs";

const Rating = ({ ratings }) => {
    return (
        <div>
            <p className="text-c-grey-60"><OutlineStarIcon className="w-4 mr-1.5" /> Ratings</p>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-2 gap-3 mt-2.5">
                {ratings.map(rating => (
                    <div className="bg-c-black-08 border border-c-black-15 rounded-lg py-3.5 px-4 text-white">
                        <p className="text-super-sm">{rating.source}</p>
                        <div>
                            {Array(rating.score).fill(<StarIcon className="w-4" />)} {rating.score}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rating;