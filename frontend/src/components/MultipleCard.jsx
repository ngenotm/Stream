import { RightArrowSvg } from "@/assets/Svgs";
import Link from "next/link";


const MultipleCard = ({ title, images }) => {
    const placeholders = 4 - images.length;
    const displayImages = images.slice(0, 4);

    return (
        <Link href="/" className="flex-shrink-0 max-lg:w-[200px] max-sm:w-[11rem]">
            <div className="lg:px-5 md:px-4 md:py-4 p-3 bg-c-black-10 border border-c-black-15 rounded-xl relative  duration-300 cursor-pointer">

                <div className="mb-9">
                    <div className="grid grid-cols-2 gap-1">
                        {displayImages.map((src, index) => (
                            <img key={index} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}`} alt="movie name" className="w-full rounded-xl aspect-square" />
                        ))}
                        {Array.from({ length: placeholders }).map((_, index) => (
                            <div key={index + displayImages.length} className="w-full bg-c-black-20 rounded-xl aspect-square"></div>
                        ))}
                    </div>
                </div>
                <div
                    className="w-full h-[100%] bg-gradient-to-t from-c-black-10 via-c-black-10/55 via-65% to-c-black-2/20 rounded-b-xl
                 absolute bottom-0 left-0 flex items-end px-5 py-4"
                >
                    <div className="flex-1 flex items-center justify-between mt-4">
                        <h4 className="font-medium text-white capitalize">{title}</h4>
                        <button><RightArrowSvg /></button>
                    </div>
                </div>

            </div>
        </Link>
    );
}

export default MultipleCard;