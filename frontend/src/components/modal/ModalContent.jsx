import { XmarkIcon } from "@/assets/Svgs";

const ModalContent = ({ user, title,isOpen, setIsOpen, children }) => {
    return (
        <div
            className={`bg-c-black-06 border border-c-black-15 rounded-xl xl:min-w-600  
        transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-95'} px-8
        ${user === null || user === undefined ? "py-12" : "py-7"}`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={`${user === null || user === undefined ? "hidden" : "flex"} items-center justify-between gap-3 mb-5`}>
                <h6 className="text-white font-semibold text-xl">{title}</h6>
                <button className="p-1.5" onClick={() => setIsOpen(false)}>
                    <XmarkIcon />
                </button>
            </div>

            {user === null || user === undefined && (
                <>
                    <span className="block text-center text-lg font-bold text-white">
                        Log In to Add a Review
                    </span>
                    <p className="text-center text-c-grey-65 mt-2 text-super-sm tracking-wide">
                        Please log in to your account to add a review
                    </p>

                    <div className="flex justify-center gap-3.5 mt-9 text-white 3xl:text-lg text-super-sm">
                        <Link href="/register">
                            <button
                                className="bg-c-red-45 py-2 px-9 rounded"
                            >
                                Login
                            </button>
                        </Link>
                        <button
                            className="bg-c-black-20 py-2 px-5 rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            close
                        </button>
                    </div>
                </>
            )}
            {user !== null && user !== undefined && children}
        </div>
    );
}

export default ModalContent;