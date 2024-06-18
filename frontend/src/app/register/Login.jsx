import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useForm } from 'react-hook-form';

import InputField from "@/components/common/InputField";


const LoginPage = ({ page, setPage }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [remember, setRemember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = (data) => {
        console.log(data);
    };

    const handleLogin = async (data) => {
        // setIsLoading(true);
        const { email, password } = data; // Use data from form

        console.log(data)

        await axios.post('http://localhost:5000/api/user/login', {
            email,
            password
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    };

    // Your form JSX remains largely the same, just ensure InputField components are correctly integrated with react-hook-form

    const result = () => {
        console.log(email, password, remember)
    }


    return (
        <section
            className={`w-[50%] h-full transition-all duration-700 py-10 px-14
                     ${page == "signup" && "delay-500"} ${page == "signup" ? "translate-x-full" : "translate-x-0"}`}
        >
            <h2 className="text-white text-2.5xl font-semibold">Log In Form</h2>
            <button className="text-white bg-red-700" onClick={result}>Result</button>


            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    {/* <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                    /> */}

                    <label htmlFor={"email"} className="text-white lg:text-super-sm md:text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your email"
                        // value={value}
                        // onChange={onChange}
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                    />
                    {errors.email && <span className="text-c-red-50 block">{errors.email.message}</span>}

                    <label htmlFor={"email"} className="text-white lg:text-super-sm md:text-sm">password</label>
                    <input
                        type="password"
                        id="password"
                        className={`support-input-field bg-c-black-10`}
                        placeholder="Enter your password"
                        // value={value}
                        // onChange={onChange}
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                    />
                    {errors.password && <span className="text-c-red-50 block">{errors.password.message}</span>}

                </div>
                {/* <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div> */}
                <button type="submit">Login</button>
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