import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import TextAreaField from "../TextAreaField";
import useUserStore from "@/stores/useUserStore";
import Rating from "react-rating";
import { OutlineStarIcon, StarIcon } from "@/assets/Svgs";
import { useEffect, useState } from "react";


const addPreview = async (data) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(response.status === 500
            ? "Server error! Please try again later."
            : "Failed to Add Preview! Please try again later.");
    }
}

const AddPreviewForm = ({ mediaId, user, setIsOpen }) => {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
    const [rating, setRating] = useState(1);

    const onSubmit = async (data) => {
        const { text } = data;
        try {
            await addPreview({
                fullName: user.fullName,
                email: user.email,
                text,
                rating,
                media: mediaId
            });
            reset();

            toast.success('Review added successfully!');
            setIsOpen(false);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextAreaField
                label="Review Text"
                id="text"
                placeholder="Write your review here"
                register={register}
                validation={{
                    required: {
                        value: true,
                        message: 'Review is required'
                    },
                    minLength: {
                        value: 3,
                        message: 'Review must be at least 3 characters'
                    }
                }}
                errors={errors}
            />

            <Rating
                initialRating={rating}
                onChange={(rate) => setRating(rate)}
                emptySymbol={<OutlineStarIcon className="w-6 h-6 mr-3" />}
                fullSymbol={<StarIcon className="w-6 h-6 mr-3" />}
                className="mt-4"
            />

            <button
                className="bg-c-red-45 text-white py-2 px-4 rounded 3xl:text-lg text-super-sm block mt-14"
                type="submit"
            >
                Submit Review
            </button>

        </form>
    );
}

export default AddPreviewForm;