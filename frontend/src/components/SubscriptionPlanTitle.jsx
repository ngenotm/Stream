const SubscriptionPlanTitle = () => {
    return (
        <div className="flex md:flex-row flex-col md:items-end items-start md:gap-6 gap-3.5">
            <div className="flex-1">
                <h3 className="text-white font-medium 3xl:text-3xl xl:text-2.5xl md:text-2xl text-xl md:mb-3 mb-1.5">Choose the plan that's right for you</h3>
                <p className="text-c-grey-60 3xl:text-xl lg:text-sm text-super-xs">
                    Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
                </p>
            </div>
            <div className="flex bg-c-black-06 bordre border-c-black-15 p-1.5 rounded-xl text-super-sm">
                <button className="bg-c-black-12 text-white 3xl:px-6 3xl:py-2.5 px-4 py-1.5 rounded-md 3xl:text-xl">Monthly</button>
                <button className="text-c-grey-60 3xl:px-6 3xl:py-2.5 px-4 py-1.5 rounded-md 3xl:text-xl">Yearly</button>
            </div>
        </div>
    );
}

export default SubscriptionPlanTitle;