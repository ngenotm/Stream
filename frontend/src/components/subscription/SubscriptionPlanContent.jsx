import { planVariantMonthly, planVariantYearly } from "@/constants/PlansVariant";
import SubscriptionPlanItem from "./SubscriptionPlanItem";
import SubscriptionPlanSkeleton from "./SubscriptionPlanSkeleton";

const SubscriptionPlanContent = ({ user, time }) => {

    return (
        <>
            {time === "yearly" ? planVariantYearly.map(({ title, subtitle, price }, index) =>
                user === null ?
                    <SubscriptionPlanSkeleton key={index} /> :
                    <SubscriptionPlanItem
                        key={index}
                        title={title}
                        subtitle={subtitle}
                        price={price}
                        time={"year"}
                    />
            ) : planVariantMonthly.map(({ title, subtitle, price }, index) =>
                user === null ?
                    <SubscriptionPlanSkeleton key={index} /> :
                    <SubscriptionPlanItem
                        key={index}
                        title={title}
                        subtitle={subtitle}
                        price={price}
                        time={"month"}
                    />
            )}
        </>
    );
}

export default SubscriptionPlanContent;