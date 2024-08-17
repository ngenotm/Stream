"use client"
import { DownloadIcon } from "@/assets/Svgs";
import axios from "axios";
import { useState } from "react";

const handleDownloadApi = async (url) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episode/download`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        if (!response.ok) {
            throw new Error(`Failed to download file: ${response.statusText}`);
        }
        return response;
    } catch (error) {
        console.error('Download error:', error);
    }
};


const DownloadItem = ({ quality, size, url, seriesTitle, season, episode }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            const response = await handleDownloadApi(url);

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            const formattedTitle = seriesTitle.replace(/\s+/g, '-');
            link.download = `${formattedTitle}-S${season}E${episode}-${quality}.mp4`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download error:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div
            className="bg-c-black-08 border border-c-black-15 rounded-lg mt-4 px-6 py-4 grid grid-cols-5 gap-10"
        >
            <div className="col-span-2">
                <p className="text-c-grey-60 text-super-base mb-1">Quality</p>
                <p className="text-white tracking-wide text-super-sm">{quality}</p>
            </div>
            <div className="col-span-2">
                <p className="text-c-grey-60 text-super-base mb-1">Size</p>
                <p className="text-white tracking-wide text-super-sm">_</p>
            </div>
            <div className="flex items-center justify-end">
                <button
                    className="bg-c-black-10 hover:bg-c-black-12 border border-c-black-15 rounded-lg 
                                py-2 px-6 max-md:text-super-sm text-c-grey-70 flex items-center"
                    // onClick={handleDownload}
                    onClick={handleDownload} disabled={isDownloading}
                >
                    Download <DownloadIcon className="w-5 ml-2" />
                </button>
            </div>
        </div>
    );
}

export default DownloadItem;