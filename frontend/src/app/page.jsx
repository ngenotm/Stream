import { LeftArrowSvg, PlaySvg, RightArrowSvg } from "@/assets/Svgs";

export default function Home() {
  return (
    <>

      <div className="w-full h-screen relative">
        <img src="/images/header-banner-white.jpg" alt="streamVibe" className="w-full h-full object-cover" />
        <div className="w-full h-[10vh] bg-gradient-to-t from-c-black to-c-black/0 absolute bottom-0"></div>
      </div>

      <section className="relative -top-20 pt-4">
        <h2 className="font-semibold text-center text-5xl mb-4 text-white">The Best Streaming Experience</h2>
        <p className="text-c-grey-60 text-center text-sm mb-5">
          StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With <br />
          StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. <br />
          You can also create your own watchlists, so you can easily find the content you want to watch.
        </p>
        <button
          className="bg-c-red-45 text-white px-6 py-2.5 rounded-lg text-sm flex items-center gap-2 mx-auto"
        >
          <PlaySvg /> Start Watching Now
        </button>
      </section>

      <section className="container mt-14">

        <div className="flex items-end mb-12">

          <div className="flex-1">
            <h3 className="text-white font-semibold text-2.5xl mb-3">We Provide you streaming experience across various devices.</h3>
            <p className="text-c-grey-60 text-sm">
              Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
            </p>
          </div>
          <div className="rounded-xl bg-c-black-06 border border-c-black-12 p-2.5 flex items-center">

            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 rounded-lg bg-c-black-10 border border-c-black-12
                 flex justify-center items-center"
              ><LeftArrowSvg /></button>
              <div className="flex items-center gap-1">
                <div className="h-[2px] min-w-3 w-5 bg-c-red-45"></div>
                <div className="h-[2px] min-w-3 bg-c-black-20"></div>
                <div className="h-[2px] min-w-3 bg-c-black-20"></div>
                <div className="h-[2px] min-w-3 bg-c-black-20"></div>
              </div>
              <button
                className="w-10 h-10 rounded-lg bg-c-black-10 border border-c-black-12
                 flex justify-center items-center"
              ><RightArrowSvg /></button>
            </div>

          </div>

        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 gap-4">

          {/* <GenreItem /> */}
          <a to="/movies">
            <div className="px-5 py-4 bg-c-black-10 border border-c-black-15 rounded-xl relative hover:scale-105 duration-300 cursor-pointer">

              <div>
                <div className="grid grid-cols-2">
                  <img src="/images/thumbnail-1.jpg" alt="movie name" className="w-full rounded-2xl" />
                  <img src="/images/thumbnail-2.jpg" alt="movie name" className="w-full rounded-2xl" />
                </div>
                <div className="grid grid-cols-2">
                  <img src="/images/thumbnail-3.jpg" alt="movie name" className="w-full rounded-2xl" />
                  <img src="/images/thumbnail-4.jpg" alt="movie name" className="w-full rounded-2xl" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <h4 className="font-medium text-white">Action</h4>
                <button><RightArrowSvg /></button>
              </div>
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
          </a>

        </div>

      </section>

    </>
  );
}
