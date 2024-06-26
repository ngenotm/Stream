"use client";
import { useForm } from 'react-hook-form';


const SupportForm = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    return (
        <div
            className="md:col-span-3 col-span-full bg-c-black-06 border border-c-black-15 rounded-lg xl:px-8 px-5 xl:py-7 py-5"
        >
            <form className="md:grid md:grid-cols-2 3xl:gap-x-8 xl:gap-x-6 gap-x-4 3xl:gap-y-7 lg:gap-y-4 gap-y-2 max-md:space-y-3">

                <div>
                    <label htmlFor="first-name" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your first name"
                        {...register('firstName', { required: 'First Name is required' })}
                    />
                    {errors.firstName && <span className="text-c-red-50 block">{errors.firstName.message}</span>}
                </div>

                <div>
                    <label htmlFor="last-name" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your last name"
                        {...register('lastName', { required: 'Last Name is required' })}
                    />
                    {errors.lastName && <span className="text-c-red-50 block">{errors.lastName.message}</span>}
                </div>

                <div>
                    <label htmlFor="email" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <span className="text-c-red-50 block">{errors.email.message}</span>}
                </div>

                <div>
                    <label htmlFor="phone" className="text-white 3xl:text-xl lg:text-super-sm md:text-sm mb-2 xl:mb-1">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your phone number"
                        {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && <span className="text-c-red-50 block">{errors.phone.message}</span>}
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
                    {errors.message && <span className="text-c-red-50 block">{errors.message.message}</span>}
                </div>

            </form>
            <div className="flex lg:flex-row flex-col lg:items-center max-lg:gap-4 justify-between mt-3.5">
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="agree-policy" className="accent-c-black-15 w-5 h-5" />
                    <label htmlFor="agree-policy" className="text-c-grey-60 3xl:text-base xl:text-sm text-super-xs">I agree with Terms of Use and Privacy Policy</label>
                </div>
                <button className="bg-c-red-45 text-white py-2 px-4 rounded 3xl:text-lg text-super-sm">Send Message</button>
            </div>
        </div>
    )
};

export default SupportForm;