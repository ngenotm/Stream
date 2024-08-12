import PreviewsSection from "@/components/PreviewSection";
import CastSection from "@/components/singleSeries/CastSection";
import Description from "@/components/singleSeries/Description";
import SeasonsSection from "@/components/singleSeries/SeasonsSection";
import SinglePageLayout from "@/components/layout/singlePage/SinglePageLayout";

const fetchSingleSeries = async (slug) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/${slug}`);
    const data = await res.json();

    return data;
}

const SingleSeries = ({ params }) => {
    return (
        <SinglePageLayout>
            {/*//! Seasons List Section */}
            <SeasonsSection />

            {/*//! Description Section */}
            <Description />

            {/*//! Cast Section */}
            <CastSection />

            {/*//! Previews Section */}
            <PreviewsSection />
        </SinglePageLayout>
    );
}

export default SingleSeries;