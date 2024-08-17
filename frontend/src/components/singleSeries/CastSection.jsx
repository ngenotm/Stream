import { LeftArrowSvg } from "@/assets/Svgs";
import ActorItem from "./ActorItem";


const CastSection = ({ actors }) => {
    return (
        <div className="bg-c-black-10 border border-c-black-15 rounded-2xl xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5">
            <div className="flex items-center justify-between lg:mb-5 mb-4">
                <h4 className="text-c-grey-60 xl:text-lg md:text-super-base font-medium">Actors</h4>
                <div className="flex gap-2.5">
                    <button
                        className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.65rem] h-[2.65rem]"
                    >
                        <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px]" />
                    </button>
                    <button
                        className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.65rem] h-[2.65rem]"
                    >
                        <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px] rotate-180" />
                    </button>
                </div>
            </div>
            <div className="flex gap-4 overflow-x-auto custom-scrollbar custom-scrollbar-sm pb-2.5">
                {actors.length > 0 && actors.map(({ actorId, fullName, profile }) => (
                    <ActorItem key={actorId} id={actorId} fullName={fullName} profile={profile} />
                ))}
            </div>
        </div>
    );
}

export default CastSection;