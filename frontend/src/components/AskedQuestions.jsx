import QuestionTitle from "./QuestionTitle";
import QuestionItem from "./QuestionItem";

const AskedQuestions = () => {
    return (
        <section className="container mt-16">

            <QuestionTitle />

            <div className="grid md:grid-cols-2 gap-x-10 md:mt-8 mt-10">

                <QuestionItem />

            </div>

        </section>
    );
}

export default AskedQuestions;