import { Suspense } from "react";

import PreviewsSection from "@/components/PreviewSection";
import CastSection from "@/components/singleSeries/CastSection";
import Description from "@/components/singleSeries/Description";
import SeasonsSection from "@/components/singleSeries/SeasonsSection";
import SinglePageLayout from "@/components/layout/singlePage/SinglePageLayout";
import SinglePageSkeleton from "@/components/layout/singlePage/SinglePageSkeleton";


const fetchSingleSeries = async (slug) => {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/${slug}`);
    const data = await res.json();
    console.log(data)
    return data;
}

const SingleSeries = async ({ params }) => {
    const { slug } = params;

    const seriesData = await fetchSingleSeries(slug).then(data => data.series);
    const pictures = await fetchSingleSeries(slug).then(data => data.pictures);

    if (!seriesData || !pictures) return <SinglePageSkeleton />;

    // const { _id: id, title, cover, language, director, release_date, description, country, rotten_rating, imdb_rating, actors, awards } = seriesData;


    return (
        <Suspense fallback={<SinglePageSkeleton />}>
            <SinglePageLayout
                data={seriesData}
            >
                {/*//! Seasons List Section */}
                <SeasonsSection />

                {/*//! Description Section */}
                <Description description={seriesData.description} />

                {/*//! Cast Section */}
                <CastSection />

                {/*//! Previews Section */}
                <PreviewsSection />
            </SinglePageLayout>
        </Suspense>
    );
}

export default SingleSeries;