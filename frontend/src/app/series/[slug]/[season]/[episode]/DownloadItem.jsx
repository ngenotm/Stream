"use client"
import { DownloadIcon } from "@/assets/Svgs";
import axios from "axios";
import { useState } from "react";

const DownloadItem = ({ quality, size, url }) => {

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