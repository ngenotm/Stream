"use client";

import ReviewItem from "./ReviewItem";
import ReviewItemSkeleton from "./ReviewItemSkeleton";
import { useEffect, useRef, useState } from "react";
import ReviewSectionTitle from "./ReviewSectionTitle";
import DialogModal from "../modal/DialogModal";
import AddReviewForm from "./AddReviewForm";
import { fetchPreviews } from "../../services/ReviewService";
import useUserStore from "@/stores/useUserStore";


const ReviewSection = ({ id }) => {
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const scrollContainerRef = useRef(null);
    const user = useUserStore((state) => state.user);

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
            <ReviewSectionTitle setIsOpen={setIsOpen} prev={handlePrev} next={handleNext} />
            <div
                ref={scrollContainerRef}
                className="flex 3xl:gap-6 lg:gap-[2%] gap-4 flex-nowrap overflow-x-auto custom-scrollbar custom-scrollbar-sm pb-2.5"
            >

                {loading || previews?.length === 0 ? (
                    Array.from({ length: 3 }).map((_, index) => <ReviewItemSkeleton key={index} />)
                ) : (
                    previews.map(({ fullName, rating, text }, index) => (
                        <ReviewItem
                            key={index}
                            fullName={fullName}
                            text={text}
                            rating={rating}
                        />
                    ))
                )}

            </div>

            <DialogModal user={user} isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Your Review"}>
                <AddReviewForm mediaId={id} user={user} setIsOpen={setIsOpen} />
            </DialogModal>

        </div>
    )
};

export default ReviewSection;