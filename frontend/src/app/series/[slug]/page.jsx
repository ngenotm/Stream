import PreviewsSection from "@/components/PreviewSection";
import SubscriptionBox from "@/components/subscription/SubscriptionBox";
import CastSection from "@/components/singleSeries/CastSection";
import Description from "@/components/singleSeries/Description";
import Director from "@/components/singleSeries/Director";
import Genres from "@/components/singleSeries/Genres";
import Languages from "@/components/singleSeries/Languages";
import Musician from "@/components/singleSeries/Musician";
import Rating from "@/components/singleSeries/Rating";
import ReleasedMovie from "@/components/singleSeries/ReleasedMovie";
import SeasonsSection from "@/components/singleSeries/SeasonsSection";
import TopHeader from "@/components/singleSeries/TopHeader";


const SingleSeries = ({ params }) => {
    return (
        <main className="container py-6">

            <TopHeader />

            <section className="grid grid-cols-12 xl:gap-8 lg:gap-4 gap-6 xl:mt-24 md:mt-16 mt-10 mb-12 min-h-screen">

                <article
                    className="lg:col-span-8 col-span-12 space-y-6 max-lg:order-2"
                >

                    {/*//! Seasons List Section */}
                    <SeasonsSection />

                    {/*//! Description Section */}
                    <Description />

                    {/*//! Cast Section */}
                    <CastSection />

                    {/*//! Previews Section */}
                    <PreviewsSection />

                </article>

                <article
                    className="lg:col-span-4 col-span-12 bg-c-black-10 border border-c-black-15 rounded-2xl
                    xl:py-7 xl:px-7 md:px-5 md:py-5 px-3.5 py-3.5 lg:space-y-7 space-y-5 h-fit"
                >

                    <ReleasedMovie year={2022} />
                    <Languages languages={['English']} />
                    <Rating ratings={[{ source: 'IMDb', score: 5 }, { source: 'StreamVibe', score: 5 }]} />
                    <Genres genres={['Sci-Fi TV']} />
                    <Director director={{ name: 'The Duffer Brothers', country: 'USA', image: '/images/director.jpg' }} />
                    <Musician musician={{ name: 'Kyle Dixon', country: 'USA', image: '/images/musician.jpg' }} />

                </article>

            </section>

            <SubscriptionBox />

        </main>
    );
}

export default SingleSeries;