"use client";

import { HomeIcon } from "@/assets/Svgs";
import InputField from "@/components/common/InputField";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
    const [page, setPage] = useState("login");

    return (
        <main
            className="w-full h-screen bg-c-black-08 overflow-hidden"
        >

            <div className="w-full h-full flex relative">

                {/*//! Signup Page */}
                <section className={`w-[50%] h-full transition-all duration-700 py-10 px-14
                     ${page == "login" && "delay-500"} ${page == "login" ? "-translate-x-full" : "translate-x-0"}`}
                >
                    <h2 className="text-white text-2.5xl font-semibold">Sign Up Form</h2>

                    <form action="" className="mt-14">

                        <div className="space-y-6">
                            <InputField label="Email" placeholder="Enter your email" name="email" value="" onChange={() => { }} customClass="bg-c-black-10" />
                            <InputField label="Password" placeholder="Enter your password" name="password" value="" onChange={() => { }} customClass="bg-c-black-10" />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember" className="text-white">Remember me</label>
                                </div>
                                <Link href="/forgot-password" className="text-white">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <button
                            className="bg-c-red-45 text-white text-super-base font-medium rounded-full px-14 py-3.5 mt-12"
                        >
                            Sign Up
                        </button>

                        <p className="text-white mt-10">
                            Already have an account?
                            <span className="text-c-red-45 cursor-pointer hover:underline" onClick={() => { setPage("login") }}>Log In</span>
                        </p>


                    </form>
                </section>



                {/*//! Login Page  */}
                <section
                    className={`w-[50%] h-full transition-all duration-700 py-10 px-14
                     ${page == "signup" && "delay-500"} ${page == "signup" ? "translate-x-full" : "translate-x-0"}`}
                >
                    <h2 className="text-white text-2.5xl font-semibold">Log In Form</h2>

                    <form action="" className="mt-14">

                        <div className="space-y-6">
                            <InputField label="Email" placeholder="Enter your email" name="email" value="" onChange={() => { }} customClass="bg-c-black-10" />
                            <InputField label="Password" placeholder="Enter your password" name="password" value="" onChange={() => { }} customClass="bg-c-black-10" />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember" className="text-white">Remember me</label>
                                </div>
                                <Link href="/forgot-password" className="text-white">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <button
                            className="bg-c-red-45 text-white text-super-base font-medium rounded-full px-14 py-3.5 mt-12"
                        >
                            Log In
                        </button>

                        <p className="text-white mt-10">
                            Don't have an account? <span className="text-c-red-45 cursor-pointer hover:underline" onClick={() => { setPage("signup") }}>Sign Up</span>
                        </p>


                    </form>
                </section>




                <div
                    className={`w-[50%] h-full bg-green-500 absolute transition-transform duration-700 bg-[url('/images/header-banner.jpg')] bg-cover bg-center overflow-hidden
         ${page == "login" ? "transform-none" : "translate-x-full"}`}
                >
                    <div className="w-full h-full bg-c-black-06/60 px-14 py-8">

                        <div className="flex items-center justify-between">
                            <img src="/images/logo-white.png" alt="stream vibe logo" className="3xl:w-full lg:w-[165px] w-[150px]" />
                            <Link href="/">
                                <span className="text-white flex gap-2">Back to Home <HomeIcon /></span>
                            </Link>
                        </div>

                        <div className="relative">
                            {/*//! Login Text Info */}
                            <div className={`mt-20 w-full absolute top-0 transition-all duration-700 ${page == "login" ? "left-0" : "left-[-200%]"}`}>
                                <h1
                                    className={`text-white text-3xl font-semibold`}
                                >Log In Page</h1>

                                <p className="text-white/80 mt-10 text-base leading-7 mb-10">
                                    To access your account and take advantage of all the special features and services on our site,
                                    please log in with your personal information. If you do not have an account yet, you can sign up
                                    and enjoy our exclusive benefits.
                                </p>


                                <button
                                    className={`bg-c-red-45 text-white text-super-base font-medium rounded-full px-14 py-3.5
                                   `}
                                    onClick={() => setPage("signup")}
                                >
                                    Sign Up Page
                                </button>
                            </div>

                            {/*//! Sign Up Text Info */}
                            <div className={`mt-20 w-full absolute top-0 transition-all duration-700 ${page == "signup" ? "left-0" : "left-[-200%]"}`}>
                                <h1
                                    className={`text-white text-3xl font-semibold`}
                                >Sign Up Page</h1>

                                <p className="text-white/80 mt-10 text-base leading-7 mb-10">
                                    To access your account and take advantage of all the special features and services on our site,
                                    please log in with your personal information. If you do not have an account yet, you can sign up
                                    and enjoy our exclusive benefits.
                                </p>

                                <button
                                    className={`bg-c-red-45 text-white text-super-base font-medium rounded-full px-14 py-3.5
                                   `}
                                    onClick={() => setPage("login")}
                                >
                                    Log In Page
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

            </div >

        </main >
    );
}

export default LoginPage;