import EpisodeItem from "./EpisodeItem";
import SeasonItem from "./SeasonItem";

const SeasonsSection = () => {
    return (
        <div className="bg-c-black-10 border border-c-black-15 rounded-2xl flex flex-col gap-4 xl:py-7 xl:px-7 md:px-5 md:py-5 px-3.5 py-3.5">
            <h4 className="text-white md:text-xl text-lg font-medium lg:mb-7 md:mb-5 mb-1.5">Seasons and Episodes</h4>
            <div className="flex flex-col gap-4">
                <SeasonItem seasonNumber={1} episodeCount={9}>
                    <EpisodeItem
                        episodeNumber={1}
                        episodeTitle="Chapter One : The Vanishing of Will Byers"
                        episodeDuration={49}
                        episodeDescription="On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab."
                        episodeImage="/images/series-banner.jpg"
                    />
                    {/* Add more EpisodeItem components here */}
                </SeasonItem>
                {/* Add more SeasonItem components here */}
            </div>
        </div>
    );
}

export default SeasonsSection;