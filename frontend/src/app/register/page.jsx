"use client";

import { Suspense, useState } from "react";
import SignupPage from "./Signup";
import LoginPage from "./Login";
import SidePage from "./SidePage";
import { useSearchParams } from "next/navigation";

const RegisterPage = () => {
    const searchParams = useSearchParams();
    const [page, setPage] = useState(searchParams.get("page") ? searchParams.get("page") : "login");

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main
                className="w-full h-screen bg-c-black-08 overflow-hidden"
            >

                <div className="w-full h-full flex relative">

                    <SignupPage page={page} setPage={setPage} />

                    <LoginPage page={page} setPage={setPage} />

                    <SidePage page={page} setPage={setPage} />

                </div >

            </main >
        </Suspense>
    );
}

export default RegisterPage;