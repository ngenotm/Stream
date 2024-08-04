"use client";
import useUserStore from "@/stores/useUserStore";

const SubscriptionPlanItem = ({ title, subtitle, price }) => {
    const user = useUserStore(state => state.user);
    console.log(user)
    return (
        <>
            {user === null ?
                <div className="flex flex-col justify-between bg-c-black-10 border border-c-black-15 px-6 py-4 rounded-lg animate-pulse">
                    <div>
                        <div className="h-8 w-3/5 bg-c-black-20 rounded mb-2"></div>
                        <div className="h-6 w-4/5 bg-c-black-15 rounded"></div>
                        {/* <div className="h-3.5 w-4/5 bg-c-black-15 rounded"></div>
            <div className="h-3.5 mt-1 w-4/5 bg-c-black-15 rounded"></div> */}
                    </div>

                    <div className="mt-6">
                        <div className="h-8 w-1/2 bg-c-black-20 rounded mb-4"></div>

                        <div className="flex items-center gap-4">
                            <div className="h-9 w-1/2 bg-c-black-15 rounded"></div>
                            <div className="h-9 w-1/2 bg-c-black-15 rounded"></div>
                        </div>
                    </div>
                </div> :
                <div className="flex flex-col justify-between bg-c-black-10 border border-c-black-15 3xl:px-8 3xl:py-6 px-6 py-4 rounded-lg">
                    <>
                        <h6 className="text-white font-bold 3xl:text-2xl text-super-base mb-2">{title}</h6>
                        <p className="text-c-grey-60 3xl:text-lg xl:text-sm md:text-super-xs text-xs mb-5">{subtitle}</p>
                    </>

                    <div>
                        <p className="">
                            <span className="text-white font-semibold 3xl:text-3xl text-xl">${price}</span>
                            <span className="text-c-grey-60 3xl:text-xl text-sm">/month</span>
                        </p>

                        <div
                            className="flex items-center xl:gap-4 md:gap-2 gap-4 mt-6 text-white xl:text-sm md:text-super-xs text-super-sm"
                        >
                            {user?.timeTrial ?
                                <button className="bg-c-red-45 flex-1 3xl:text-[1.23rem] 3xl:py-3.5 md:py-2.5 py-2.5 px-3.5 rounded w-full">Choose Plan</button>
                                :
                                <>
                                    <button className="bg-c-black-08 flex-1 border border-c-black-15 3xl:text-[1.23rem] 3xl:py-3.5 md:py-2 py-2.5 px-3 rounded">Start Free Trial</button>
                                    <button className="bg-c-red-45 flex-1 3xl:text-[1.23rem] 3xl:py-3.5 md:py-2 py-2.5 px-3.5 rounded">Choose Plan</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default SubscriptionPlanItem;