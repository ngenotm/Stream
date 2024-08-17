import { HalfStarIcon, OutlineStarIcon, StarIcon } from "@/assets/Svgs";

const StarRating = ({ rating }) => {
    const filledStars = Array(Math.floor(rating)).fill('filled');
    const halfStar = rating % 1 !== 0 ? ['half'] : [];
    const emptyStars = Array(5 - Math.floor(rating) - halfStar.length).fill('empty');

    return (
        <div className="flex items-center 3xl:gap-1 gap-0.5">
            {filledStars.map((_, index) => (
                <StarIcon key={index} className="3xl:w-5 md:w-3.5 w-3 3xl:h-5 md:h-3.5 h-3 text-c-red-45" />
            ))}
            {halfStar.map((_, index) => (
                <HalfStarIcon key={index} className="3xl:w-5 md:w-3.5 w-3 3xl:h-5 md:h-3.5 h-3 text-c-red-45" />
            ))}
            {emptyStars.map((_, index) => (
                <OutlineStarIcon key={index} className="3xl:w-5 md:w-3.5 w-3 3xl:h-5 md:h-3.5 h-3 fill-c-grey-60" />
            ))}
            <span className="text-c-grey-60">{rating}</span>
        </div>
    );
};

export default StarRating;