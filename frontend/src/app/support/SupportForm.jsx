import InputField from "@/components/common/InputField";

const SupportForm = () => (
    <div
        className="md:col-span-3 col-span-full bg-c-black-06 border border-c-black-15 rounded-lg xl:px-8 px-5 xl:py-7 py-5"
    >
        <form className="md:grid md:grid-cols-2 xl:gap-x-6 gap-x-4 lg:gap-y-4 gap-y-2 max-md:space-y-3">
            <InputField key="first-name-input" label="First Name" placeholder="Enter First Name" name="first-name" value={null} setValue={null} />
            <InputField key="last-name-input" label="Last Name" placeholder="Enter Last Name" name="last-name" value={null} setValue={null} />
            <InputField key="email-input" label="Email" placeholder="Enter your Email" name="email" type="email" value={null} setValue={null} />
            <InputField key="phone-number-input" label="Phone Number" placeholder="Enter Phone Number" name="phone-number" value={null} setValue={null} />
            <InputField key="message-input" label="Message" placeholder="Enter your Message" name="message" textarea value={null} setValue={null} />
        </form>
        <div className="flex lg:flex-row flex-col lg:items-center max-lg:gap-4 justify-between mt-3.5">
            <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="agree-policy" className="accent-c-black-15 w-5 h-5" />
                <label htmlFor="agree-policy" className="text-c-grey-60 xl:text-sm text-super-xs">I agree with Terms of Use and Privacy Policy</label>
            </div>
            <button className="bg-c-red-45 text-white py-2 px-4 rounded text-super-sm">Send Message</button>
        </div>
    </div>
);

export default SupportForm;