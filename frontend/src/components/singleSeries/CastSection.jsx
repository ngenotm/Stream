import { LeftArrowSvg } from "@/assets/Svgs";
import Link from "next/link";

const CastItem = ({ id, fullName, profile }) => (
    <Link href={`/actors/${id}`}
        className="relative flex-shrink-0 lg:w-[135px] w-16 border border-c-black-15 rounded-lg overflow-hidden group"
    >
        <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${profile}`}
            alt={fullName}
            className="rounded-lg group-hover:scale-105 duration-400" />
        <div
            className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-c-black-06/90
             via-c-black-06/70 to-c-black-06/40 opacity-0 group-hover:opacity-100 duration-400"
        ></div>
        <div
            className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-c-black-06/90
             via-c-black-06/60 to-c-black-06/30 px-2 py-2.5 flex flex-col justify-end"
        >
            <h6 className="text-white/80 font-medium text-base">
                {fullName}
            </h6>
        </div>
    </Link>
);


const CastSection = ({ actors }) => {
    return (
        <div className="bg-c-black-10 border border-c-black-15 rounded-2xl xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5">
            <div className="flex items-center justify-between lg:mb-5 mb-4">
                <h4 className="text-c-grey-60 xl:text-lg text-super-base font-medium">Cast</h4>
                <div className="flex gap-2.5">
                    <button
                        className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.9rem] h-[2.9rem]"
                    >
                        <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px]" />
                    </button>
                    <button
                        className="bg-c-black-08 border border-c-black-15 rounded-full flex items-center justify-center
                    md:w-11 md:h-11 w-[2.9rem] h-[2.9rem]"
                    >
                        <LeftArrowSvg className="stroke-c-grey-60 w-[17px] h-[17px] rotate-180" />
                    </button>
                </div>
            </div>
            <div className="flex gap-4 overflow-x-auto custom-scrollbar custom-scrollbar-sm pb-2.5">
                {actors.length > 0 && actors.map(({ actorId, fullName, profile }) => (
                    <CastItem key={actorId} id={actorId} fullName={fullName} profile={profile} />
                ))}
            </div>
        </div>
    );
}

export default CastSection;