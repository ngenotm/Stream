"use client";

import PreviewItem from "./PreviewItem";
import PreviewItemSkeleton from "./PreviewItemSkeleton";
import { useEffect, useRef, useState } from "react";
import PreviewSectionTitle from "./PreviewSectionTitle";

const fetchPreviews = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${id}`);
    const data = await response.json();
    console.log(data.reviews)
    return data.reviews;
}

const PreviewsSection = ({ id }) => {
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const getPreviews = async () => {
            const data = await fetchPreviews(id);
            setPreviews(data);
            setLoading(false);
        };
        getPreviews();
    }, []);


    const handleNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-c-black-10 border border-c-black-15 rounded-2xl xl:py-7 xl:px-7 md:px-6 md:py-6 px-5 py-5">
            <PreviewSectionTitle prev={handlePrev} next={handleNext} />
            <div
                ref={scrollContainerRef}
                className="flex 3xl:gap-6 lg:gap-[2%] gap-4 flex-nowrap overflow-x-auto custom-scrollbar custom-scrollbar-sm pb-2.5"
            >

                {loading || previews?.length === 0 ? (
                    Array.from({ length: 3 }).map((_, index) => <PreviewItemSkeleton key={index} />)
                ) : (
                    previews.map(({ fullName, rating, text }, index) => (
                        <PreviewItem
                            key={index}
                            fullName={fullName}
                            text={text}
                            rating={rating}
                        />
                    ))
                )}

            </div>
        </div>
    )
};

export default PreviewsSection;