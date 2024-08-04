"use client";
import { useState } from 'react';
import QuestionTitle from "./QuestionTitle";
import QuestionItem from './QuestionItem';
import { questions } from '../../constants/questions';


const AskedQuestions = () => {
    const [openId, setOpenId] = useState(null);

    const handleClick = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="container mt-16">
            <QuestionTitle />
            <div className="grid md:grid-cols-2 gap-x-10 md:mt-8 mt-10">
                {questions.map(({ id, question, answer }) => (
                    <QuestionItem
                        key={id}
                        handleClick={handleClick}
                        openId={openId}
                        id={id}
                        question={question}
                        answer={answer}
                    />
                ))}
            </div>
        </section>
    );
};

export default AskedQuestions;
