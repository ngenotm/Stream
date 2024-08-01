"use client";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const SupportForm = () => {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

    const onSubmit = async (data) => {
        console.log("first")
        const { firstName, lastName, email, phoneNumber, message } = data; //! Use data from form

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/support/`, {
            firstName, lastName, email, phoneNumber, message
        }).then(res => {
            console.log(res)
            reset();
            toast.success('Message sent successfully! Please be patient.');
        }).catch(err => {
            if (err.message == "Network Error") {
                return toast.error("Something went wrong! Please try again later.");
            }

            const { status } = err.response

            if (status === 500) {
                return toast.error("Server error! Please try again later.");
            }

            toast.error('Failed to send message! Please try again later.');
        })
    }

    return (
        <form
            className="md:col-span-3 col-span-full bg-c-black-06 border border-c-black-15 rounded-lg xl:px-8 px-5 xl:py-7 py-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className="md:grid md:grid-cols-2 3xl:gap-x-8 xl:gap-x-6 gap-x-4 3xl:gap-y-7 lg:gap-y-4 gap-y-2 max-md:space-y-3"
            >

                <div>
                    <label htmlFor="first-name" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your first name"
                        {...register('firstName', {
                            required: 'First Name is required',
                            minLength: { value: 3, message: 'Phone number must be at least 3 characters' },
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'First name cannot contain numbers',
                            }
                        })}
                    />
                    {errors.firstName && <span className="text-c-red-50 block text-sm mt-1.5">{errors.firstName.message}</span>}
                </div>

                <div>
                    <label htmlFor="last-name" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your last name"
                        {...register('lastName', {
                            required: 'Last Name is required',
                            minLength: { value: 3, message: 'Phone number must be at least 3 characters' },
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'Last name cannot contain numbers',
                            }
                        })}
                    />
                    {errors.lastName && <span className="text-c-red-50 block text-sm mt-1.5">{errors.lastName.message}</span>}
                </div>

                <div>
                    <label htmlFor="email" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                        })}
                    />
                    {errors.email && <span className="text-c-red-50 block text-sm mt-1.5">{errors.email.message}</span>}
                </div>

                <div>
                    <label htmlFor="phone" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your phone number"
                        {...register('phoneNumber', {
                            required: 'Phone number is required',
                            minLength: { value: 11, message: 'Phone number must be at least 10 characters' },
                            maxLength: { value: 11, message: 'Phone number must be at most 12 characters' }
                        })}
                    />
                    {errors.phoneNumber && <span className="text-c-red-50 block text-sm mt-1.5">{errors.phoneNumber.message}</span>}
                </div>

                <div className='col-span-full'>
                    <label htmlFor="message" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your Message"
                        {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && <span className="text-c-red-50 block text-sm mt-1.5">{errors.message.message}</span>}
                </div>

            </div>
            <div className="flex lg:flex-row flex-col lg:items-start max-lg:gap-4 justify-between mt-5">
                <div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox" name="" id="agree-policy" className="accent-c-black-15 w-5 h-5"
                            {...register('agree', { required: 'You must agree to the terms of use and privacy policy' })}
                        />
                        <label htmlFor="agree-policy" className="text-c-grey-60 3xl:text-base xl:text-sm text-super-xs">
                            I agree with Terms of Use and Privacy Policy

                        </label>
                    </div>
                    {errors.agree && <span className="text-c-red-50 block mt-2 text-sm">{errors.agree.message}</span>}
                </div>
                <button
                    className="bg-c-red-45 text-white py-2 px-4 rounded 3xl:text-lg text-super-sm"
                    type="submit"
                >Send Message</button>
            </div>
        </form>
    )
};

export default SupportForm;