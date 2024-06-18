"use client";

import { useState } from "react";
import SignupPage from "./Signup";
import LoginPage from "./Login";
import SidePage from "./SidePage";

const RegisterPage = () => {
    const [page, setPage] = useState("login");

    return (
        <main
            className="w-full h-screen bg-c-black-08 overflow-hidden"
        >

            <div className="w-full h-full flex relative">

                <SignupPage page={page} setPage={setPage} />

                <LoginPage page={page} setPage={setPage} />

                <SidePage page={page} setPage={setPage} />

            </div >

        </main >
    );
}

export default RegisterPage;