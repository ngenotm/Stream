import SubscriptionBox from "@/components/SubscriptionBox";
import SubscriptionPlan from "@/components/SubscriptionPlan";

const SubscriptionsPage = () => {
    return (
        <main className="">

            <SubscriptionPlan />

            <section className="container py-0">
                <div>
                    <h3 className="text-white font-medium xl:text-2.5xl md:text-2xl text-lg mb-3">Compare our plans and find the right one for you</h3>
                    <p className="text-c-grey-60 lg:text-sm md:text-super-xs text-xs">
                        StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
                    </p>
                </div>

                {/* <table class="table-fixed w-full border border-c-black-15">
                    <thead>
                        <tr className="text-left">
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody className="text-c-grey-60 text-sm">
                        <tr className="border border-c-black-15">
                            <td className="border border-c-black-15">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className="border border-c-black-15">Malcolm Lockyer</td>
                            <td className="border border-c-black-15">1961</td>
                        </tr>
                        <tr className="border border-c-black-15">
                            <td className="border border-c-black-15">Witchy Woman</td>
                            <td className="border border-c-black-15">The Eagles</td>
                            <td className="border border-c-black-15">1972</td>
                        </tr>
                        <tr className="border border-c-black-15">
                            <td className="border border-c-black-15">Shining Star</td>
                            <td className="border border-c-black-15">Earth, Wind, and Fire</td>
                            <td className="border border-c-black-15">1975</td>
                        </tr>
                    </tbody>
                </table> */}


            </section>

            <SubscriptionBox />

        </main>
    );
}

export default SubscriptionsPage;