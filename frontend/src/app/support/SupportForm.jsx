"use client";
import CheckboxField from '@/components/CheckboxField';
import FormField from '@/components/FormField';
import TextAreaField from '@/components/TextAreaField';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const SupportForm = () => {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

    // const onSubmit = async (data) => {
    //     console.log("first")
    //     const { firstName, lastName, email, phoneNumber, message } = data; //! Use data from form

    //     await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/support/`, {
    //         firstName, lastName, email, phoneNumber, message
    //     }).then(res => {
    //         console.log(res)
    //         reset();
    //         toast.success('Message sent successfully! Please be patient.');
    //     }).catch(err => {
    //         if (err.message == "Network Error") {
    //             return toast.error("Something went wrong! Please try again later.");
    //         }

    //         const { status } = err.response

    //         if (status === 500) {
    //             return toast.error("Server error! Please try again later.");
    //         }

    //         toast.error('Failed to send message! Please try again later.');
    //     })
    // }

    const onSubmit = async (data) => {
        const { firstName, lastName, email, phoneNumber, message } = data;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/support/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    message,
                }),
            });

            if (!response.ok) {
                if (response.status === 500) {
                    toast.error("Server error! Please try again later.");
                } else {
                    toast.error('Failed to send message! Please try again later.');
                }
                return;
            }

            const result = await response.json();
            console.log(result);
            reset();
            toast.success('Message sent successfully! Please be patient.');

        } catch (error) {
            // Handle network errors
            if (error.message === "Failed to fetch") {
                toast.error("Something went wrong! Please try again later.");
            } else {
                toast.error('Failed to send message! Please try again later.');
            }
        }
    };


    return (
        <form
            className="md:col-span-3 col-span-full bg-c-black-06 border border-c-black-15 rounded-lg xl:px-8 px-5 xl:py-7 py-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className="md:grid md:grid-cols-2 3xl:gap-x-8 xl:gap-x-6 gap-x-4 3xl:gap-y-7 lg:gap-y-4 gap-y-2 max-md:space-y-3"
            >
                <FormField
                    label="First Name"
                    id="first-name"
                    type="text"
                    placeholder="Enter your first name"
                    register={register}
                    required={{
                        value: true,
                        message: 'First Name is required'
                    }}
                    minLength={{
                        value: 3,
                        message: 'First name must be at least 3 characters'
                    }}
                    pattern={{
                        value: /^[A-Za-z]+$/i,
                        message: 'First name cannot contain numbers'
                    }}
                    errors={errors}
                />

                <FormField
                    label="Last Name"
                    id="last-name"
                    type="text"
                    placeholder="Enter your last name"
                    register={register}
                    required={{
                        value: true,
                        message: 'Last Name is required'
                    }}
                    minLength={{
                        value: 3,
                        message: 'Last name must be at least 3 characters'
                    }}
                    pattern={{
                        value: /^[A-Za-z]+$/i,
                        message: 'Last name cannot contain numbers'
                    }}
                    errors={errors}
                />

                <FormField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    register={register}
                    required={{
                        value: true,
                        message: 'Email is required'
                    }}
                    pattern={{
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                    }}
                    errors={errors}
                />


                <FormField
                    label="Phone Number"
                    id="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    register={register}
                    required={{
                        value: true,
                        message: 'Phone number is required'
                    }}
                    minLength={{
                        value: 11,
                        message: 'Phone number must be at least 10 characters'
                    }}
                    maxLength={{
                        value: 11,
                        message: 'Phone number must be at most 12 characters'
                    }}
                    errors={errors}
                />

                <TextAreaField
                    label="Message"
                    id="message"
                    rows={5}
                    placeholder="Enter your Message"
                    register={register}
                    required={{
                        value: true,
                        message: 'Message is required'
                    }}
                    errors={errors}
                />

            </div>
            <div className="flex lg:flex-row flex-col lg:items-start max-lg:gap-4 justify-between mt-5">

                <CheckboxField
                    label="I agree with Terms of Use and Privacy Policy"
                    id="agree-policy"
                    register={register}
                    required={{
                        value: true,
                        message: 'You must agree to the terms of use and privacy policy'
                    }}
                    errors={errors}
                />
                <button
                    className="bg-c-red-45 text-white py-2 px-4 rounded 3xl:text-lg text-super-sm"
                    type="submit"
                >Send Message</button>
            </div>
        </form>
    )
};

export default SupportForm;