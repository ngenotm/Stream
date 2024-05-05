import { LeftArrowSvg, RightArrowSvg } from "@/assets/Svgs";

const SlidePagination = () => {
    return (
        <div className="rounded-xl bg-c-black-06 border border-c-black-12 p-2.5 lg:flex items-center hidden">

            <div className="flex items-center gap-2">
                <button
                    className="3xl:w-12 3xl:h-12 w-10 h-10 rounded-lg bg-c-black-10 border border-c-black-12
                 flex justify-center items-center"
                ><LeftArrowSvg className="stroke-white w-[18px] h-[18px]" /></button>
                <div className="flex items-center gap-1">
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 3xl:w-7
                     w-5 bg-c-red-45"></div>
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                    <div className="h-[2px] 3xl:min-w-5 min-w-3 bg-c-black-20"></div>
                </div>
                <button
                    className="3xl:w-12 3xl:h-12 w-10 h-10 rounded-lg bg-c-black-10 border border-c-black-12
                 flex justify-center items-center"
                ><LeftArrowSvg className="stroke-white w-[18px] h-[18px] rotate-180" /></button>
            </div>

        </div>
    );
}

export default SlidePagination;