// import { LeftArrowSvg } from "@/assets/Svgs";

const { LeftArrowSvg } = require("@/assets/Svgs");

// const SlidePagination = ({currentIndex,total,onNext,onPrev}) => {
//     return (
//         <div className="rounded-xl bg-c-black-06 border border-c-black-12 p-2 lg:flex items-center hidden">

//             <div className="flex items-center gap-2">
//                 <button
//                     className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12
//                  flex justify-center items-center"
//                 ><LeftArrowSvg className="stroke-white w-[16px] h-[16px]" /></button>
//                 <div className="flex items-center gap-1">
//                     <div className="h-[2px] 3xl:min-w-5 min-w-3 3xl:w-7
//                      w-5 bg-c-red-45"></div>
//                     <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
//                     <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
//                     <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
//                     <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
//                 </div>
//                 <button
//                     className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12
//                  flex justify-center items-center"
//                 ><LeftArrowSvg className="stroke-white w-[16px] h-[16px] rotate-180" /></button>
//             </div>

//         </div>
//     );
// }

// export default SlidePagination;
import React from 'react'
const SlidePagination = ({ currentIndex, total, onNext, onPrev }) => {
    return (
        <div className="rounded-xl bg-c-black-06 border border-c-black-12 p-2 lg:flex items-center hidden">
            <div className="flex items-center gap-2">
                <button
                    className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12 flex justify-center items-center"
                    onClick={onPrev}
                >
                    <LeftArrowSvg className="stroke-white w-[16px] h-[16px]" />
                </button>
                <div className="flex items-center gap-1">
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 3xl:w-7 w-5 bg-c-red-45"></div>
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                </div>
                <button
                    className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12 flex justify-center items-center"
                    onClick={onNext}
                >
                    <LeftArrowSvg className="stroke-white w-[16px] h-[16px] rotate-180" />
                </button>
            </div>
        </div>
    );
};

// const SlidePagination = ({ category, currentIndex, total, onNext, onPrev }) => {
//     const currentCategoryIndex = currentIndex[category] || 0;

//     return (
//         <div className="rounded-xl bg-c-black-06 border border-c-black-12 p-2 lg:flex items-center hidden">
//             <div className="flex items-center gap-2">
//                 <button
//                     className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12 flex justify-center items-center"
//                     onClick={() => onPrev(category)}
//                 >
//                     <LeftArrowSvg className="stroke-white w-[16px] h-[16px]" />
//                 </button>
//                 <div className="flex items-center gap-1">
//                     {Array.from({ length: total }, (_, index) => (
//                         <div
//                             key={index}
//                             className={`h-[2px] 3xl:min-w-5 min-w-3 ${index === currentCategoryIndex ? 'bg-c-red-45' : 'bg-c-black-20'}`}
//                         ></div>
//                     ))}
//                 </div>
//                 <button
//                     className="3xl:w-12 3xl:h-12 w-9 h-9 rounded-lg bg-c-black-10 border border-c-black-12 flex justify-center items-center"
//                     onClick={() => onNext(category)}
//                 >
//                     <LeftArrowSvg className="stroke-white w-[16px] h-[16px] rotate-180" />
//                 </button>
//             </div>
//         </div>
//     );
// };

export default SlidePagination;