import DownloadItem from "./DownloadItem";

const DownloadSection = ({ files }) => {
    return (
        <section
            className="bg-c-black-10 border border-c-black-15 xl:p-9 md:px-5 md:py-5 px-3.5 py-3.5 rounded-2.5xl"
        >
            <h4
                className="text-white md:text-xl text-lg font-medium lg:mb-8 md:mb-5 mb-8"
            >
                Download Links
            </h4>

            {files.map((file, index) => (
                <DownloadItem key={index} quality={file.quality} size={'1.2 GB'} url={file.url} />
            ))}

        </section>
    );
}

export default DownloadSection;