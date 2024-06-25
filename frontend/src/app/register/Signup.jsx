import InputField from "@/components/common/InputField";
import Link from "next/link";

const SignupPage = ({ page, setPage }) => {
    return (
        <section className={`w-[50%] h-full transition-all duration-700 py-10 px-14
            ${page == "login" && "delay-500"} ${page == "login" ? "-translate-x-full" : "translate-x-0"}`
        }
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
    );
}

export default SignupPage;