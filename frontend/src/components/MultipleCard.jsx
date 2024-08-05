import { RightArrowSvg } from "@/assets/Svgs";
import Link from "next/link";


const MultipleCard = () => {
    return (
        <Link href="/" className="flex-shrink-0 max-lg:w-[200px] max-sm:w-[11rem]">
            <div className="lg:px-5 md:px-4 md:py-4 p-3 bg-c-black-10 border border-c-black-15 rounded-xl relative  duration-300 cursor-pointer">

                <div className="mb-9">
                    <div className="grid grid-cols-2">
                        {/* <img src={`${process.env.}/images/thumbnail-1.jpg`} alt="movie name" className="w-full rounded-xl aspect-square" /> */}
                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/first-series-test-undefined-CCh5C8DQR8-streamvibe-processed.jpg`} alt="movie name" className="w-full rounded-xl aspect-square" />
                        <img src="/images/thumbnail-2.jpg" alt="movie name" className="w-full rounded-xl aspect-square" />
                    </div>
                    <div className="grid grid-cols-2">
                        <img src="/images/thumbnail-3.jpg" alt="movie name" className="w-full rounded-xl aspect-square" />
                        <img src="/images/thumbnail-4.jpg" alt="movie name" className="w-full rounded-xl aspect-square" />
                    </div>
                </div>
                {/* <div className="flex items-center justify-between mt-4">
                    <h4 className="font-medium text-white">Action</h4>
                    <button><RightArrowSvg /></button>
                </div> */}
                <div
                    className="w-full h-[100%] bg-gradient-to-t from-c-black-10 via-c-black-10/55 via-65% to-c-black-2/20 rounded-b-xl
                 absolute bottom-0 left-0 flex items-end px-5 py-4"
                >
                    <div className="flex-1 flex items-center justify-between mt-4">
                        <h4 className="font-medium text-white">Action</h4>
                        <button><RightArrowSvg /></button>
                    </div>
                </div>

            </div>
        </Link>
    );
}

export default MultipleCard;