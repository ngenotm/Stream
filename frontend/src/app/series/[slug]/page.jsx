import { Suspense } from "react";

import ReviewSection from "@/components/review/ReviewSection";
import CastSection from "@/components/singleSeries/CastSection";
import Description from "@/components/singleSeries/Description";
import SeasonsSection from "@/components/singleSeries/SeasonsSection";
import SinglePageLayout from "@/components/layout/singlePage/SinglePageLayout";
import SinglePageSkeleton from "@/components/layout/singlePage/SinglePageSkeleton";


const fetchSingleSeries = async (slug) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/${slug}`);
    const data = await res.json();
    return data;
}

const SingleSeries = async ({ params }) => {
    const { slug } = params;

    const seriesData = await fetchSingleSeries(slug).then(data => data.series);
    const pictures = await fetchSingleSeries(slug).then(data => data.pictures);

    if (!seriesData || !pictures) return <SinglePageSkeleton />;

    const { _id: id, title, description, actors } = seriesData;

    return (
        <Suspense fallback={<SinglePageSkeleton />}>
            <SinglePageLayout
                data={seriesData}
            >
                {/*//! Seasons List Section */}
                <SeasonsSection id={id} seriesTitle={title} />

                {/*//! Description Section */}
                <Description description={description} />

                {/*//! Cast Section */}
                <CastSection actors={actors} />

                {/*//! Previews Section */}
                <ReviewSection id={id} />
            </SinglePageLayout>
        </Suspense>
    );
}

export default SingleSeries;