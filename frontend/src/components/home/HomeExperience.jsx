import { GameConsoleSvg, LaptopSvg, SmartPhoneSvg, SmartTvSvg, TabletSvg, VrHeadsetSvg } from "@/assets/Svgs";
import ExperienceItem from "./ExperienceItem";
import ExperienceTitle from "./ExperienceTitle";

const variant = [
    {
        icon: <SmartPhoneSvg />,
        title: "Smartphones",
        subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: <SmartTvSvg />,
        title: "Smart TV",
        subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: <TabletSvg />,
        title: "Tablet",
        subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: <LaptopSvg />,
        title: "Laptops",
        subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: <GameConsoleSvg />,
        title: "Gaming Consoles",
        subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: <VrHeadsetSvg />,
        title: "VR Headsets",
        subtitle: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
];


const HomeExperience = () => {
    return (
        <section className="container mt-20">

            <ExperienceTitle />

            <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-8 md:gap-6 gap-4 mt-8">

                {variant.map((item, index) =>
                    <ExperienceItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />)
                }

            </div>

        </section>
    );
}

export default HomeExperience;