import { handleActivateSubscription } from "@/services/SubscriptionService";
import { toast } from "react-toastify";

const SubscriptionModalContent = ({ id, plan, time, setIsOpen }) => {

    const handlePlan = async () => {
        console.log(plan, time)
        const formatTime = time === "month" ? 31 : 365;
        const data = await handleActivateSubscription(id, false, formatTime, plan).then((data) => {
            setIsOpen(false);
            console.log(data)
            toast.success("Subscription activated successfully.");
        }).catch((error) => {
            console.log(error)
            toast.error("An error occurred. Please try again later.");
        });
    }

    return (
        <>
            <span className="block text-center text-xl font-bold text-white">
                Start <span className="capitalize">{plan}</span> Plan -  {time === "month" ? "1 Month" : "1 Year"}
            </span>
            <p className="text-center text-c-grey-65 mt-4 text-super-sm tracking-wide">
                Are you sure you want to choose this plan? You will be <br /> redirected to the payment page after selection.
            </p>

            <div className="flex justify-center gap-3.5 mt-9 text-white 3xl:text-lg text-super-sm">
                <button
                    className="bg-c-red-45 py-2 px-9 rounded"
                    onClick={handlePlan}
                >
                    Pay Now
                </button>
            </div>
        </>
    );
}

export default SubscriptionModalContent;