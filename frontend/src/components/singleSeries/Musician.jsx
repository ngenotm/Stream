const Musician = ({ musician }) => (
    <div>
        <p className="text-c-grey-60">Music</p>
        <div className="flex bg-c-black-08 border border-c-black-15 rounded-lg py-3 px-3 mt-2.5">
            <img src="/images/musician.jpg" alt="" className="rounded-lg mr-3" />
            <div className="flex flex-col justify-around">
                <h5 className="text-white text-super-sm">{musician.name}</h5>
                <span className="block text-c-grey-60 text-sm">From {musician.country}</span>
            </div>
        </div>
    </div>
);

export default Musician;