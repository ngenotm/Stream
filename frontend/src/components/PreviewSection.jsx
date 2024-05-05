import PreviewItem from "./PreviewItem";
import { PlusSvg } from "@/assets/Svgs";


const PreviewsSection = () => (
    <div className="bg-c-black-10 border border-c-black-15 rounded-2xl xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5">
        <div className="flex items-center justify-between mb-6">
            <h4 className="text-c-grey-60 text-lg font-medium">Previews</h4>
            <button className="btn-black-08 border border-c-black-15 rounded-lg py-2 px-3 max-md:text-super-sm text-white/90">
                <PlusSvg className="inline mr-1" /> Add Your Review
            </button>
        </div>
        <div className="flex 3xl:gap-6 lg:gap-[2%] gap-4 flex-wrap">

            <PreviewItem
                reviewerName="Aniket Roy"
                reviewerLocation="From India"
                reviewText="This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it."
                rating={5}
            />
            <PreviewItem
                reviewerName="Aniket Roy"
                reviewerLocation="From India"
                reviewText="This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it."
                rating={5}
            />

        </div>
    </div>
);

export default PreviewsSection;