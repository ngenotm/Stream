import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";

import InputField from "@/components/common/InputField";
import { toast } from "react-toastify";



const LoginPage = ({ page, setPage }) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleLogin = async (data) => {
        const { email, password, remember } = data; //! Use data from form

        console.log(email, password, remember)

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
            email,
            password,
            remember
        }).then(res => {
            router.push("/")
            toast.success('Login successful!');
        }).catch(err => {
            // console.log(err);
            const { status } = err.response

            if (status === 500) {
                return toast.error("Server error! Please try again later.");
            }

            if (status === 404) {
                return setError("email", { type: "manual", message: "User not found!" }); // Set error for email
            }

            if (status === 401) {
                return setError("password", { type: "manual", message: "Incorrect password!" }); // Set error for password
            }

            toast.error("Login failed! Please try again.")
        });
    };

    //! Your form JSX remains largely the same, just ensure InputField components are correctly integrated with react-hook-form

    const result = () => {
        // console.log(email, password, remember);
        // errors.email = { message: "Invalid email address" }
        // errors.email.message ="invalid email address"
        console.log(errors)
    }


    return (
        <section
            className={`w-[50%] h-full transition-all duration-700 py-10 px-14
                     ${page == "signup" && "delay-500"} ${page == "signup" ? "translate-x-full" : "translate-x-0"}`}
        >
            <h2 className="text-white text-2.5xl font-semibold" onClick={result}>Log In Form</h2>

            <form onSubmit={handleSubmit(handleLogin)} className="mt-14">
                <div className="space-y-6">

                    <div>
                        <label htmlFor={"email"} className="text-white lg:text-super-sm md:text-sm mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`support-input-field bg-c-black-10`}
                            placeholder="Enter your email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        />
                        {errors.email && <span className="text-c-red-50 block">{errors.email.message}</span>}
                    </div>

                    <div>
                        <label htmlFor={"email"} className="text-white lg:text-super-sm md:text-sm mb-1">password</label>
                        <input
                            type="password"
                            id="password"
                            className={`support-input-field bg-c-black-10`}
                            placeholder="Enter your password"
                            {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
                        />
                        {errors.password && <span className="text-c-red-50 block">{errors.password.message}</span>}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                {...register('remember', { valueAsBoolean: true })}
                            />
                            <label htmlFor="remember" className="text-white">Remember me</label>
                        </div>
                        <Link href="/forgot-password" className="text-white">
                            Forgot Password?
                        </Link>
                    </div>

                </div>

                <button
                    className="bg-c-red-45 text-white text-super-base font-medium rounded-full px-14 py-3.5 mt-12"
                    type="submit"
                >
                    Log In
                </button>
            </form>







            {/* <form action="" className="mt-14">

                <div className="space-y-6">
                    <InputField label="Email" placeholder="Enter your email" name="email" value={email}
                        onChange={e => setEmail(e.target.value)} customClass="bg-c-black-10" />
                    <InputField label="Password" placeholder="Enter your password" name="password" value={password}
                        onChange={e => setPassword(e.target.value)} customClass="bg-c-black-10" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" checked={remember} onChange={e => setRemember(e.target.checked)} />
                            <label htmlFor="remember" className="text-white">Remember me</label>
                        </div>
                        <Link href="/forgot-password" className="text-white">
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <button
                    className="bg-c-red-45 text-white text-super-base font-medium rounded-full px-14 py-3.5 mt-12"
                    onClick={handleLogin}
                >
                    Log In
                </button>

                <p className="text-white mt-10">
                    Don't have an account? <span className="text-c-red-45 cursor-pointer hover:underline" onClick={() => { setPage("signup") }}>Sign Up</span>
                </p>


            </form> */}
            {/* <form onSubmit={handleSubmit(handleLogin)} className="mt-14">
                <div className="space-y-6">
                    <div className="space-y-1">
                        <InputField
                            label="Email"
                            placeholder="Enter your email"
                            name="email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                            customClass="bg-c-black-10"
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-c-red-50">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-1">
                        <InputField
                            label="Password"
                            placeholder="Enter your password"
                            name="password"
                            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                            customClass="bg-c-black-10"
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-c-red-50">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                {...register('remember')}
                            />
                            <label htmlFor="remember" className="text-white">Remember me</label>
                        </div>
                        <Link href="/forgot-password" className="text-white">
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-c-red-45 text-white text-super-base font-medium rounded-full px-14 py-3.5 mt-12"
                >
                    Log In
                </button>
            </form> */}
        </section>
    );
}

export default LoginPage;