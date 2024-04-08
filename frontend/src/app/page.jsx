import { BellSvg, FacebookSvg, GameConsoleSvg, LabtopSvg, LaptopSvg, LeftArrowSvg, LinkdinSvg, LinkedinSvg, MinusSvg, PlaySvg, RightArrowSvg, SearchSvg, SmartPhoneSvg, SmartTvSvg, TabletSvg, TwitterSvg, VrHeadsetSvg } from "@/assets/Svgs";

export default function Home() {
  return (
    <>

      <header className="container flex items-center justify-between">

        <img src="/images/logo-white.png" alt="StreamVibe" />

        <div></div>
        <div>
          <button className="focus:outline-none focus:border-none mx-2.5"><SearchSvg /></button>
          <button className="focus:outline-none focus:border-none mx-2.5"><BellSvg /></button>
        </div>

      </header>

      <div className="w-full h-screen relative">
        <div
          className="absolute w-full h-[5px] top-0 right-0
          3xl:bg-slate-500 2xl:bg-amber-400 xl:bg-stone-600 lg:bg-c-red-50 md:bg-orange-500 sm:bg-violet-500 bg-teal-400
        "></div>
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
            <h3 className="text-white font-semibold text-2.5xl mb-3">Explore our wide variety of categories</h3>
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

      <section className="container mt-20">

        <h3 className="text-white font-medium text-2.5xl mb-3">We Provide you streaming experience across various devices.</h3>
        <p className="text-c-grey-60 text-sm">
          With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
        </p>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-8 md:gap-6 gap-4 mt-8">

          {/*//! Single Item */}
          <div className="rounded-lg border border-c-black-15 bg-c-black-06 relative -z-10 px-5 py-5">
            <div className="absolute rounded-lg w-full h-full top-0 right-0 bg-gradient-to-bl from-c-red-45/10 to-c-black-08 to-60% -z-10" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-c-black-08 border border-c-black-12 flex justify-center items-center"><SmartPhoneSvg /></div>
              <h5 className="text-white font-semibold">Smartphones</h5>
            </div>
            <p className="text-c-grey-60 xl:text-super-sm md:text-sm text-super-xs mt-3">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          {/*//! Single Item */}
          <div className="rounded-lg border border-c-black-15 bg-c-black-06 relative -z-10 px-5 py-5">
            <div className="absolute rounded-lg w-full h-full top-0 right-0 bg-gradient-to-bl from-c-red-45/10 to-c-black-08 to-60% -z-10" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-c-black-08 border border-c-black-12 flex justify-center items-center"><SmartTvSvg /></div>
              <h5 className="text-white font-semibold">Smart TV</h5>
            </div>
            <p className="text-c-grey-60 xl:text-super-sm md:text-sm text-super-xs mt-3">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store            </p>
          </div>

          {/*//! Single Item */}
          <div className="rounded-lg border border-c-black-15 bg-c-black-06 relative -z-10 px-5 py-5">
            <div className="absolute rounded-lg w-full h-full top-0 right-0 bg-gradient-to-bl from-c-red-45/10 to-c-black-08 to-60% -z-10" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-c-black-08 border border-c-black-12 flex justify-center items-center"><TabletSvg /></div>
              <h5 className="text-white font-semibold">Tablet</h5>
            </div>
            <p className="text-c-grey-60 xl:text-super-sm md:text-sm text-super-xs mt-3">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          {/*//! Single Item */}
          <div className="rounded-lg border border-c-black-15 bg-c-black-06 relative -z-10 px-5 py-5">
            <div className="absolute rounded-lg w-full h-full top-0 right-0 bg-gradient-to-bl from-c-red-45/10 to-c-black-08 to-60% -z-10" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-c-black-08 border border-c-black-12 flex justify-center items-center"><LaptopSvg /></div>
              <h5 className="text-white font-semibold">Laptops</h5>
            </div>
            <p className="text-c-grey-60 xl:text-super-sm md:text-sm text-super-xs mt-3">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          {/*//! Single Item */}
          <div className="rounded-lg border border-c-black-15 bg-c-black-06 relative -z-10 px-5 py-5">
            <div className="absolute rounded-lg w-full h-full top-0 right-0 bg-gradient-to-bl from-c-red-45/10 to-c-black-08 to-60% -z-10" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-c-black-08 border border-c-black-12 flex justify-center items-center"><GameConsoleSvg /></div>
              <h5 className="text-white font-semibold">Gaming Consoles</h5>
            </div>
            <p className="text-c-grey-60 xl:text-super-sm md:text-sm text-super-xs mt-3">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          {/*//! Single Item */}
          <div className="rounded-lg border border-c-black-15 bg-c-black-06 relative -z-10 px-5 py-5">
            <div className="absolute rounded-lg w-full h-full top-0 right-0 bg-gradient-to-bl from-c-red-45/10 to-c-black-08 to-60% -z-10" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-c-black-08 border border-c-black-12 flex justify-center items-center"><VrHeadsetSvg /></div>
              <h5 className="text-white font-semibold">VR Headsets</h5>
            </div>
            <p className="text-c-grey-60 xl:text-super-sm md:text-sm text-super-xs mt-3">
              StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

        </div>

      </section>


      <section className="container mt-16">
        {/* //? Content Header */}
        <div className="flex items-end gap-6">
          <div className="flex-1">
            <h3 className="text-white font-medium text-2.5xl mb-3">Frequently Asked Questions</h3>
            <p className="text-c-grey-60 text-sm">
              Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className="bg-c-red-45 text-white text-super-sm py-2 px-5 rounded-md">Ask a Question</button>
        </div>


        {/* //! Main Content  */}
        <div className="grid md:grid-cols-2 gap-x-10 mt-8">

          {/*//TODO Single Item */}
          <div>
            <div className="flex items-center justify-between gap-3.5 mb-5">

              <div className="w-10 h-10 rounded-lg bg-c-black-12 border border-c-black-15 flex items-center justify-center text-white font-semibold"> 01</div>

              <div className="flex flex-1 flex-col justify-center items-start">
                <h6 className="text-white/85 lg:text-super-sm text-sm">What is StreamVibe?</h6>
              </div>
              <div><MinusSvg /></div>

            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-c-red-45/0 via-c-red-45/60 to-c-red-45/0"></div>
          </div>

        </div>

      </section>


      <section className="container py-16">
        {/* //? Content Header */}
        <div className="flex items-end gap-6">
          <div className="flex-1">
            <h3 className="text-white font-medium text-2.5xl mb-3">Choose the plan that's right for you</h3>
            <p className="text-c-grey-60 text-sm">
              Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
            </p>
          </div>
          <div className="flex bg-c-black-06 bordre border-c-black-15 p-1.5 rounded-xl text-super-sm">
            <button className="bg-c-black-12 text-white px-4 py-1.5 rounded-md">Monthly</button>
            <button className="text-c-grey-60 px-4 py-1.5 rounded-md">Yearly</button>
          </div>
        </div>


        {/*//! Main Content */}
        <div className="grid grid-cols-3 gap-4 mt-8">

          {/*//TODO Single Item */}
          <div className="bg-c-black-10 border border-c-black-15 px-6 py-4 rounded-lg">
            <h6 className="text-white font-bold text-super-base mb-2">Basic Plan</h6>
            <p className="text-c-grey-60 text-sm mb-5">
              Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
            </p>

            <p className="">
              <span className="text-white font-semibold text-xl">$9.99</span> <span className="text-c-grey-60 text-sm">/month</span>
            </p>

            <div className="flex items-center gap-4 mt-6 text-white text-super-xs">
              <button className="bg-c-black-08 flex-1 border border-c-black-15 py-2 px-3.5 rounded">Start Free Trial</button>
              <button className="bg-c-red-45 flex-1 py-2 px-3.5 rounded">Choose Plan</button>
            </div>
          </div>

          {/*//TODO Single Item */}
          <div className="bg-c-black-10 border border-c-black-15 px-6 py-4 rounded-lg">
            <h6 className="text-white font-bold text-super-base mb-2">Standard Plan</h6>
            <p className="text-c-grey-60 text-sm mb-5">
              Access to a wider selection of movies and shows, including most new releases and exclusive content
            </p>

            <p className="">
              <span className="text-white font-semibold text-xl">$12.99</span> <span className="text-c-grey-60 text-sm">/month</span>
            </p>

            <div className="flex items-center gap-4 mt-6 text-white text-super-xs">
              <button className="bg-c-black-08 flex-1 border border-c-black-15 py-2 px-3.5 rounded">Start Free Trial</button>
              <button className="bg-c-red-45 flex-1 py-2 px-3.5 rounded">Choose Plan</button>
            </div>
          </div>

          {/*//TODO Single Item */}
          <div className="bg-c-black-10 border border-c-black-15 px-6 py-4 rounded-lg">
            <h6 className="text-white font-bold text-super-base mb-2">Premium Plan</h6>
            <p className="text-c-grey-60 text-sm mb-5">
              Access to a widest selection of movies and shows, including all new releases and Offline Viewing
            </p>

            <p className="">
              <span className="text-white font-semibold text-xl">$14.99</span> <span className="text-c-grey-60 text-sm">/month</span>
            </p>

            <div className="flex items-center gap-4 mt-6 text-white text-super-xs">
              <button className="bg-c-black-08 flex-1 border border-c-black-15 py-2 px-3.5 rounded">Start Free Trial</button>
              <button className="bg-c-red-45 flex-1 py-2 px-3.5 rounded">Choose Plan</button>
            </div>
          </div>

        </div>

      </section>


      <section className="container py-20">
        <div className="w-full rounded-xl border border-gray-500/20 py-20 px-10 flex items-center gap-4 bg-red-400"
          style={{ backgroundImage: "url(/images/subscription-box-image.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="flex-1">
            <h5 className="text-white font-semibold text-3xl mb-5">Start your free trial today!</h5>
            <p className="text-c-grey-60 text-sm">
              This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button className="bg-c-red-45 text-white rounded-md py-2.5 px-4">Start a Free Trial</button>
        </div>
      </section>





      <footer className="bg-c-black-06">
        <div className="container py-8">

          <div className="flex items-start justify-between mt-6 mb-16">

            {/*//! Single Item */}
            <div>
              <p className="text-white font-semibold mb-3.5">Home</p>

              <ul className="text-sm text-c-grey-60 space-y-2">
                <li>Categories</li>
                <li>Devices</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/*//! Single Item */}
            <div>
              <p className="text-white font-semibold mb-3.5">Movies</p>

              <ul className="text-sm text-c-grey-60 space-y-2">
                <li>Genres</li>
                <li>Trending</li>
                <li>New Release</li>
                <li>Popular</li>
              </ul>
            </div>

            {/*//! Single Item */}
            <div>
              <p className="text-white font-semibold mb-3.5">Shows</p>

              <ul className="text-sm text-c-grey-60 space-y-2">
                <li>Genres</li>
                <li>Trending</li>
                <li>New Release</li>
                <li>Popular</li>
              </ul>
            </div>

            {/*//! Single Item */}
            <div>
              <p className="text-white font-semibold mb-3.5">Support</p>

              <ul className="text-sm text-c-grey-60 space-y-2">
                <li>Contact Us</li>
              </ul>
            </div>

            {/*//! Single Item */}
            <div>
              <p className="text-white font-semibold mb-3.5">Subscription</p>

              <ul className="text-sm text-c-grey-60 space-y-2">
                <li>Plans</li>
                <li>Features</li>
              </ul>
            </div>

            {/*//! Single Item */}
            <div>
              <p className="text-white font-semibold mb-3.5">Connect With Us</p>

              <div className="flex items-center justify-between">
                <button className="w-9 h-9 flex items-center justify-center bg-c-black-10 border border-c-black-15 rounded">
                  <FacebookSvg />
                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-c-black-10 border border-c-black-15 rounded">
                  <TwitterSvg />
                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-c-black-10 border border-c-black-15 rounded">
                  <LinkedinSvg />
                </button>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-between text-c-grey-60 text-super-xs pt-4 border-t border-t-c-black-15">
            <p>@2023 streamvib, All Rights Reserved</p>
            <ul className="flex items-center divide-x divide-c-black-15 space-x-3">
              <li className="pl-3">Terms of Use</li>
              <li className="pl-3">Privacy Policy</li>
              <li className="pl-3">Cookie Policy</li>
            </ul>
          </div>

        </div>
      </footer>


    </>
  );
}
