// import MultipleCard from "../MultipleCard";
// import MultipleCardSkeleton from "../MultipleCardSkeleton";
// import MovieCategoryTitle from "./MovieCategoryTitle";

// const fetchMovieCategories = async () => {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/categories`);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching movie categories:', error);
//         return []
//     }
// }

// const HomeMovieCategory = async () => {
//     const categories = await fetchMovieCategories();

//     return (
//         <section className="container mt-14">
//             <MovieCategoryTitle />

//             {/* <div
//                 className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-4 gap-2.5 flex-nowrap max-lg:overflow-x-auto"
//             >
//                 {!categories || categories?.length === 0 ?
//                     Array.from({ length: 3 }).map((_, index) => <MultipleCardSkeleton key={index} />) :
//                     Object.entries(categories).map(([category, images], index) => (
//                         <MultipleCard key={index} title={category} images={images} />
//                     ))
//                 }

//             </div> */}
//             <div
//                 className="flex lg:gap-8 md:gap-4 gap-2.5 flex-nowrap overflow-x-auto"
//             >
//                 {!categories || categories?.length === 0 ?
//                     Array.from({ length: 3 }).map((_, index) => <MultipleCardSkeleton key={index} />) :
//                     Object.entries(categories).map(([category, images], index) => (
//                         <MultipleCard key={index} title={category} images={images} />
//                     ))
//                 }

//             </div>

//         </section>
//     );
// }

// export default HomeMovieCategory;




// const fetchMovieCategories = async () => {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/categories`);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching movie categories:', error);
//         return []
//     }
// }




// const handleNext = () => {
//     if (scrollContainerRef.current) {
//         scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//         setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - 1));
//     }
// };

// const handlePrev = () => {
//     if (scrollContainerRef.current) {
//         scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
// }
// };


"use client"
import React, { useState, useRef, useEffect } from 'react';
import MultipleCardSkeleton from '../MultipleCardSkeleton';
import MultipleCard from '../MultipleCard';
import MovieCategoryTitle from './MovieCategoryTitle';
import SlidePagination from '../SlidePagination';

// const HomeMovieCategory = () => {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // const categories = await fetchMovieCategories();
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const scrollContainerRef = useRef(null);

//     const fetchMovieCategories = async () => {
//         try {
//             const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/categories`);
//             const data = await response.json();
//             setCategories(data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching movie categories:', error);
//             setCategories([]);
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchMovieCategories();
//     }, []);


//     useEffect(() => {
//         console.log(currentIndex)
//     }, [currentIndex]);

//     const handleNext = () => {
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//             setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - 1));
//         }
//     };

//     const handlePrev = () => {
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//             setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//         }
//     };


//     return (
//         <section className="container mt-14">
//             <MovieCategoryTitle
//                 totalSlides={categories ? categories.length : 0}
//                 currentIndex={currentIndex}
//                 onNext={handleNext}
//                 onPrev={handlePrev}
//             />
//             {currentIndex}
//             <div
//                 ref={scrollContainerRef}
//                 className="flex lg:gap-8 md:gap-4 gap-2.5 flex-nowrap overflow-x-auto"
//             >
//                 {loading || categories?.length === 0
//                     ? Array.from({ length: 3 }).map((_, index) => <MultipleCardSkeleton key={index} />)
//                     : Object.entries(categories).map(([category, images], index) => (
//                         <MultipleCard key={index} title={category} images={images} />
//                     ))}
//             </div>
//         </section>
//     );
// };


const HomeMovieCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const fetchMovieCategories = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/categories`);
            const data = await response.json();
            setCategories(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movie categories:', error);
            setCategories([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovieCategories();
    }, []);

    useEffect(() => {
        console.log(currentIndex)
    }, [currentIndex]);

    const handleNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - 1));
        }
    };

    // const handleNext = () => {
    //     console.log("test")
    //     console.log(scrollContainerRef.current)
    //     console.log(Array.isArray(categories))
    //     console.log(categories)
    //     if (scrollContainerRef.current && Array.isArray(categories) && categories.length > 0) {
    //         scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    //         setCurrentIndex((prevIndex) => {
    //             if (typeof prevIndex === 'number' && !isNaN(prevIndex)) {
    //                 return Math.min(prevIndex + 1, categories.length - 1);
    //             }
    //             return 0; // Default to 0 if prevIndex is not a valid number
    //         });
    //     }
    // };


    // const handleNext = (category) => {
    //     console.log("test")
    //     if (scrollContainerRef.current && Array.isArray(categories[category]) && categories[category].length > 0) {
    //         scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    //         setCurrentIndex((prevIndex) => {
    //             const newIndex = { ...prevIndex };
    //             if (typeof newIndex[category] === 'number' && !isNaN(newIndex[category])) {
    //                 newIndex[category] = Math.min(newIndex[category] + 1, categories[category].length - 1);
    //             } else {
    //                 newIndex[category] = 0; // Default to 0 if prevIndex is not a valid number
    //             }
    //             return newIndex;
    //         });
    //     }
    // };

    const handlePrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    return (
        <section className="container mt-14">
            <MovieCategoryTitle
                totalSlides={categories ? categories.length : 0}
                currentIndex={currentIndex}
                onNext={handleNext}
                onPrev={handlePrev}
            />
            <div
                ref={scrollContainerRef}
                className="flex lg:gap-8 md:gap-4 gap-2.5 flex-nowrap overflow-x-auto pb-2.5 custom-scrollbar custom-scrollbar-sm"
            >
                {loading || categories?.length === 0
                    ? Array.from({ length: 3 }).map((_, index) => <MultipleCardSkeleton key={index} />)
                    : Object.entries(categories).map(([category, images], index) => (
                        <MultipleCard key={index} title={category} images={images} />
                    ))}
            </div>
        </section>
    );
};


export default HomeMovieCategory;