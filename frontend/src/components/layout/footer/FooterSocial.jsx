import { FacebookSvg, LinkedinSvg, TwitterSvg } from "@/assets/Svgs";

const FooterSocial = () => {
    return (
        <div>
            <p className="text-white font-semibold mb-3.5">Connect With Us</p>

            <div className="flex items-center start gap-3.5">
                <button className="w-9 h-9 flex items-center justify-center bg-c-black-10 border border-c-black-15 rounded">
                    <FacebookSvg />
                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-c-black-10 border border-c-black-15 rounded">
                    <TwitterSvg />

                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-c-black-10 border border-c-black-15 rounded">
                    <LinkedinSvg />
                </button>
            </div>
        </div>
    );
}

export default FooterSocial;