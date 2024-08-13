const Director = ({ director }) => {
    const { id, fullName, birthPlace, profile } = director;
    console.log(profile)
    return (
        <div>
            <p className="text-c-grey-60">Director</p>
            <div className="flex bg-c-black-08 border border-c-black-15 rounded-lg py-3 px-3 mt-2.5">
                <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${profile}`}
                    alt={`${fullName} director`}
                    className="w-12 h-12 object-cover object-center rounded-lg mr-3"
                />
                <div className="flex flex-col justify-around capitalize">
                    <h5 className="text-white text-super-sm">{fullName}</h5>
                    <span className="block text-c-grey-60 text-sm">From {birthPlace}</span>
                </div>
            </div>
        </div>
    )
};

export default Director;