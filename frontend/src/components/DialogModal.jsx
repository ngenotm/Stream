// "use client";

// import { useEffect } from "react";

// const DialogModal = ({ children, isOpen, setIsOpen }) => {

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [isOpen]);

//     return (
//         <div
//             className={`w-full h-screen fixed top-0 right-0 bg-c-black-06/55 flex items-center justify-center
//                  duration-300
//                 `}
//             //  ${isOpen ? "translate-y-0" : "translate-y-full"} transition-transform duration-300
//             onClick={() => setIsOpen(false)}
//         >
//             <div
//                 className="bg-c-black-06 border border-c-black-15 rounded-xl xl:min-w-600 h-36"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 {isOpen ? children : null}
//             </div>
//         </div>
//     );
// }

// export default DialogModal;




"use client";

import { useEffect, useState } from "react";

const DialogModal = ({ children, isOpen, setIsOpen }) => {
    // State to handle the transition effect
    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        // Handle scroll locking
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '11px';
            setShow(true); // Start showing the modal with transition
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
            // Delay hiding the modal until the opacity transition is finished
            setTimeout(() => setShow(false), 300); // Match the duration with your transition
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed top-0 right-0 w-full h-screen bg-c-black-06/55 flex items-center justify-center 
        transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"} 
        ${show ? "z-50" : "-z-50"} ${show ? "pointer-events-auto" : "pointer-events-none"}`}
            onClick={() => setIsOpen(false)}
        >
            <div
                className={`bg-c-black-06 border border-c-black-15 rounded-xl xl:min-w-600 h-36 
        transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {isOpen ? children : null}
            </div>
        </div >
    );
}

export default DialogModal;
