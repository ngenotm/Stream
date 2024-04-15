const SubscriptionBox = () => {
    return (
        <section className="container lg:pt-10 md:pt-6 pt-2 lg:pb-16 pb-14">
            <div
                className="w-full rounded-xl border border-gray-500/20 lg:py-20 md:py-14 py-12 md:px-10 px-3.5 flex md:flex-row flex-col items-center max-md:text-center gap-4
          md:bg-[url(/images/subscription-box-image.jpg)] bg-[url(/images/subscription-box-image-mobile.jpg)] bg-center bg-cover
          "
            >
                <div className="flex-1">
                    <h5 className="text-white font-semibold md:text-3xl text-xl mb-5">Start your free trial today!</h5>
                    <p className="text-c-grey-60 md:text-sm text-xs">
                        This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                    </p>
                </div>
                <button className="bg-c-red-45 text-white md:text-base text-super-sm rounded-md md:py-2.5 py-2 px-4">Start a Free Trial</button>
            </div>
        </section>
    );
}

export default SubscriptionBox;