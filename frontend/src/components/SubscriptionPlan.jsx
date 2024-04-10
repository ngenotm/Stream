import SubscriptionPlanItem from "./SubscriptionPlanItem";
import SubscriptionPlanTitle from "./SubscriptionPlanTitle";



const planVariant = [
    {
        title: "Basic Plan",
        subtitle: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: "9.99"
    },
    {
        title: "Standard Plan",
        subtitle: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        price: "12.99"
    },
    {
        title: "Premium Plan",
        subtitle: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        price: "14.99"
    },
]

const SubscriptionPlan = () => {
    return (
        <section className="container py-16">
            <SubscriptionPlanTitle />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 gap-5 md:mt-8 mt-10">

                {planVariant.map(({ title, subtitle, price }, index) =>
                    <SubscriptionPlanItem key={index} title={title} subtitle={subtitle} price={price} />)}

            </div>

        </section>
    );
}

export default SubscriptionPlan;