import SlidePagination from '@/components/SlidePagination';
import ArticleCard from './ArticleCard';

const ArticleSection = ({ title }) => (
    <div>
        <div className="flex items-center justify-between mt-4 mb-4">
            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium capitalize">{title}</h5>
            <SlidePagination />
        </div>
        <div className="flex flex-nowrap gap-6 overflow-x-auto">
            <ArticleCard image="/images/thumbnail-5.jpg" title="misfire" rating="4.5K" time="1h 50min" views="1.5k" />
        </div>
    </div>
);

export default ArticleSection;