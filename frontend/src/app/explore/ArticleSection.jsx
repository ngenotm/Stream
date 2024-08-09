import SlidePagination from '@/components/SlidePagination';



const ArticleSection = ({ title }) => (
    <div className="mt-9">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium">Our Genres</h5>
            <SlidePagination />
        </div>

        {/* <div
            ref={scrollContainerRef}
            className="flex lg:gap-8 md:gap-4 gap-2.5 flex-nowrap overflow-x-auto pb-2.5 custom-scrollbar custom-scrollbar-sm"
        >
            {loading || categories?.length === 0
                ? Array.from({ length: 5 }).map((_, index) => <MultipleCardSkeleton key={index} />)
                : Object.entries(categories).map(([category, images], index) => (
                    <MultipleCard key={index} title={category} images={images} />
                ))}
        </div> */}
    </div>
);

export default ArticleSection;