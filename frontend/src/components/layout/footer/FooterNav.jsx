const FooterNav = () => {
    return (
        <>
            <div>
                <p className="text-white font-semibold mb-3.5">Home</p>

                <ul className="text-sm text-c-grey-60 space-y-2">
                    <li>Categories</li>
                    <li>Devices</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div>
                <p className="text-white font-semibold mb-3.5">Movies</p>

                <ul className="text-sm text-c-grey-60 space-y-2">
                    <li>Genres</li>
                    <li>Trending</li>
                    <li>New Release</li>
                    <li>Popular</li>
                </ul>
            </div>

            <div>
                <p className="text-white font-semibold mb-3.5">Shows</p>

                <ul className="text-sm text-c-grey-60 space-y-2">
                    <li>Genres</li>
                    <li>Trending</li>
                    <li>New Release</li>
                    <li>Popular</li>
                </ul>
            </div>

            <div>
                <p className="text-white font-semibold mb-3.5">Support</p>

                <ul className="text-sm text-c-grey-60 space-y-2">
                    <li>Contact Us</li>
                </ul>
            </div>

            <div>
                <p className="text-white font-semibold mb-3.5">Subscription</p>

                <ul className="text-sm text-c-grey-60 space-y-2">
                    <li>Plans</li>
                    <li>Features</li>
                </ul>
            </div>
        </>
    );
}

export default FooterNav;