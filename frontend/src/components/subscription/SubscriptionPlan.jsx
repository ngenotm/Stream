import SubscriptionPlanItem from "./SubscriptionPlanItem";
import SubscriptionPlanTitle from "./SubscriptionPlanTitle";

import { planVariant } from "@/constants/PlansVariant";


const SubscriptionPlan = () => {
    return (
        <section className="container py-16">
            <SubscriptionPlanTitle />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 3xl:gap-8 lg:gap-4 gap-5 md:mt-8 mt-10">

                {planVariant.map(({ title, subtitle, price }, index) =>
                    <SubscriptionPlanItem key={index} title={title} subtitle={subtitle} price={price} />)}

            </div>

        </section>
    );
}

export default SubscriptionPlan;