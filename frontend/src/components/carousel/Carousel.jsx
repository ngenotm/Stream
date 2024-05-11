import { LeftArrowSvg, LikeSvg, PlaySvg, PlusSvg, SoundSvg } from "@/assets/Svgs";
import CarouselPagination from "./CarouselPagination";
import CarouselCallToAction from "./CarouselCallToAction";
import CarouselInfo from "./CarouselInfo";

const Carousel = () => {
    return (
        <header className="w-full h-[80vh] rounded-xl overflow-hidden flex items-center">


            {/*//! Single Carousel Item */}
            <div className="rounded-2xl relative w-full h-full overflow-hidden flex-shrink-0">
                <img src="/images/carousel-banner.jpg" className="w-full h-full object-cover" alt="banner" />

                {/*//! Overlay Effect */}
                <div className="w-full md:h-[60%] h-[80%] bg-gradient-to-t from-c-black-08 via-c-black-08/70 via-55% to-c-black-08/0 absolute bottom-0"></div>

                {/*//! Movie Info And Call To Actions */}
                <div
                    className="w-full flex flex-col items-center text-center absolute bottom-0 pb-7"
                >

                    <CarouselInfo />
                    <CarouselCallToAction />
                    <CarouselPagination />

                </div>
            </div>

        </header>
    );
}

export default Carousel;