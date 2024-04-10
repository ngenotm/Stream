const QuestionTitle = () => {
    return (
        <div className="flex md:flex-row flex-col md:items-end items-start md:gap-6 gap-3">
            <div className="flex-1">
                <h3 className="text-white font-medium xl:text-2.5xl md:text-2xl text-lg mb-2">Frequently Asked Questions</h3>
                <p className="text-c-grey-60 lg:text-sm md:text-super-xs text-xs">
                    Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
                </p>
            </div>
            <button className="bg-c-red-45 text-white text-super-sm lg:py-2 md:py-1.5 py-2 lg:px-5 px-3.5 rounded-md">Ask a Question</button>
        </div>
    );
}

export default QuestionTitle;