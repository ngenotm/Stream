import { MinusSvg } from "@/assets/Svgs";

const QuestionItem = () => {
    return (
        <div className="mb-3.5">
            <div className="flex items-center justify-between gap-3.5 mb-5">

                <div className="w-10 h-10 rounded-lg bg-c-black-12 border border-c-black-15 flex items-center justify-center text-white md:text-base text-super font-semibold"> 01</div>

                <div className="flex flex-1 flex-col justify-center items-start">
                    <h6 className="text-white/85 lg:text-super-sm text-super-xs">How much does StreamVibe cost?</h6>
                </div>
                <div><MinusSvg /></div>

            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-c-red-45/0 via-c-red-45/60 to-c-red-45/0"></div>
        </div>
    );
}

export default QuestionItem;