import SlidePagination from '@/components/SlidePagination';
import ArticleCard from './ArticleCard';
import { ClockIcon, EyeIcon, LeftArrowSvg, RightArrowSvg } from "@/assets/Svgs";
import Link from 'next/link';
import StarRating from '@/components/common/StarRating';

const ArticleSection = ({ title }) => (
    <div>
        <div className="flex items-center justify-between mt-4 mb-4">
            <h5 className="text-white 3xl:text-2.5xl md:text-1.5xl text-xl font-medium capitalize">{title}</h5>
            {/* <SlidePagination /> */}
            <div className="rounded-xl bg-c-black-06 border border-c-black-12 p-2 lg:flex items-center hidden">

                <div className="flex items-center gap-2">
                    <button
                        className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12
     flex justify-center items-center"
                    ><LeftArrowSvg className="stroke-white w-[16px] h-[16px]" /></button>
                    <div className="flex items-center gap-1">
                        <div className="h-[2px] 3xl:min-w-5 min-w-3 3xl:w-7
         w-5 bg-c-red-45"></div>
                        <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                        <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                        <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                    </div>
                    <button
                        className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12
     flex justify-center items-center"
                    ><LeftArrowSvg className="stroke-white w-[16px] h-[16px] rotate-180" /></button>
                </div>

            </div>
        </div>
        <div className="flex flex-nowrap gap-6 overflow-x-auto">
            {/* <ArticleCard image="/images/thumbnail-5.jpg" title="misfire" rating="4.5K" time="1h 50min" views="1.5k" /> */}

            {/*//! Single Movie */}
            <div
                className="bg-c-black-10 border border-c-black-15 rounded-xl flex-shrink-0 3xl:w-72 xl:w-56 md:w-48 w-[11rem] md:px-4 px-2.5 md:py-4 py-2.5"
            >
                <img src={"/images/thumbnail-5.jpg"} alt="thumbnail" className="rounded-xl w-full" />
                <Link href="/">
                    <h3 className="mt-3 3xl:mb-4 mb-2 3xl:leading-7 3xl:text-1.5xl text-base text-white line-clamp-2 capitalize">{title}</h3>
                </Link>
                <div className="flex justify-between max-md:flex-col text-c-grey-60 3xl:text-super-base text-sm">
                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                        {/* <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> {time} */}
                        <ClockIcon className="w-[1.15rem] h-[1.15rem]" /> 23
                    </div>
                    <div className="flex items-center gap-0.5 md:bg-c-black-08 md:border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-3.5 px-[.38rem]">
                        {/* <EyeIcon className="w-5 h-5" /> {views} */}
                        <EyeIcon className="w-5 h-5" /> 759
                    </div>
                </div>
                <div className="flex justify-between gap-1 text-c-grey-60 3xl:text-super-base text-super-xs text-center mt-2">
                    <div className="bg-c-black-08 border border-c-black-15 rounded-full 3xl:py-1.5 py-0.5 3xl:px-4 px-2">
                        <StarRating rating={0.5} />
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default ArticleSection;