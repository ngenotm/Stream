import Link from 'next/link';

const SeriesPage = () => {
    return (
        <main className="container py-20">
            <h1 className="text-3xl text-white font-semibold">Series Page</h1>
            <Link href="/series/1">
                <button className="py-2.5 px-6 rounded bg-c-red-45 text-white mt-3 outline-none border-none">
                    Single Series
                </button>
            </Link>
        </main>
    );
}

export default SeriesPage;