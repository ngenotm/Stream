import HeaderCallToAction from "./HeaderCallToAction";


const TopHeader = () => {
    return (
        <div className=" relative w-full xl:h-[80vh] md:h-[60vh] h-[50vh]">
            <img src="/images/series-banner.jpg" alt="series" className="w-full h-full object-cover object-center rounded-xl" />

            <div className="w-full absolute bottom-0 md:mb-10 mb-8 text-center md:px-20 px-4">
                <h1 className="text-2xl text-white font-semibold">Stranger Things</h1>
                <p className="md:text-c-grey-60 text-c-grey-90 2xl:text-base xl:text-super-sm text-sm md:mt-3 mt-1 mb-5 md:block hidden">
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                </p>
                <HeaderCallToAction />
            </div>

        </div>
    );
}

export default TopHeader;