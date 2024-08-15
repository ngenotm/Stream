import Link from "next/link";

const Director = ({ director }) => {
    const { directorId: id, fullName, birthPlace, profile } = director;
    return (
        <div>
            <p className="text-c-grey-60">Director</p>
            <div className="flex bg-c-black-08 border border-c-black-15 rounded-lg py-3 px-3 mt-2.5">
                <Link href={`/directors/${id}`}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${profile}`}
                        alt={`${fullName} director`}
                        className="w-12 h-12 object-cover object-center rounded-lg mr-3"
                    />
                </Link>
                <div className="flex flex-col justify-around capitalize">
                    <Link href={`/directors/${id}`} >
                        <h5 className="text-white text-super-sm">{fullName}</h5>
                    </Link>
                    <span className="block text-c-grey-60 text-sm">From {birthPlace}</span>
                </div>
            </div>
        </div>
    )
};

export default Director;