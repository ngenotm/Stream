import TopHeader from "@/components/singleSeries/TopHeader";
import Sidebar from "./Sidebar";
import SubscriptionBox from "@/components/subscription/SubscriptionBox";

const SinglePageLayout = ({ children }) => {
    return (
        <main className="container py-6">
            <TopHeader />

            <section className="grid grid-cols-12 xl:gap-8 lg:gap-4 gap-6 xl:mt-24 md:mt-16 mt-10 mb-12 min-h-screen">

                <article
                    className="lg:col-span-8 col-span-12 space-y-6 max-lg:order-2"
                >

                    {children}

                </article>

                <Sidebar />

            </section>

            <SubscriptionBox />

        </main>
    );
}

export default SinglePageLayout;