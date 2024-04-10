const SubscriptionPlanItem = ({ title, subtitle, price }) => {
    return (
        <div className="flex flex-col justify-between bg-c-black-10 border border-c-black-15 px-6 py-4 rounded-lg">
            <>
                <h6 className="text-white font-bold text-super-base mb-2">{title}</h6>
                <p className="text-c-grey-60 xl:text-sm md:text-super-xs text-xs mb-5">{subtitle}</p>
            </>

            <div>
                <p className="">
                    <span className="text-white font-semibold text-xl">${price}</span> <span className="text-c-grey-60 text-sm">/month</span>
                </p>

                <div className="flex items-center xl:gap-4 md:gap-2 gap-4 mt-6 text-white text-super-xs">
                    <button className="bg-c-black-08 flex-1 border border-c-black-15 md:py-2 py-2.5 px-3 rounded">Start Free Trial</button>
                    <button className="bg-c-red-45 flex-1 md:py-2 py-2.5 px-3.5 rounded">Choose Plan</button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionPlanItem;