const SubscriptionBox = () => {
    return (
        <section className="container lg:pt-10 md:pt-6 pt-2 lg:pb-16 pb-14">
            <div
                className="subscription-box"
            >
                <div className="flex-1">
                    <h5 className="text-white font-semibold 3xl:text-4xl md:text-3xl text-xl 3xl:mb-7 mb-5">Start your free trial today!</h5>
                    <p className="text-c-grey-60 3xl:text-[1.36rem] md:text-sm text-xs">
                        This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                    </p>
                </div>
                <button
                    className="bg-c-red-45 text-white 3xl:text-[1.35rem] md:text-base text-super-sm rounded-md 3xl:py-4 md:py-2.5 py-2 3xl:px-8 px-4"
                >Start a Free Trial</button>
            </div>
        </section>
    );
}

export default SubscriptionBox;