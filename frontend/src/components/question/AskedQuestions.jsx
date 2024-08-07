"use client";

import { useState } from 'react';

import QuestionTitle from "./QuestionTitle";
import QuestionItem from './QuestionItem';
import { questions } from '../../constants/questions';
import DialogModal from '../DialogModal';
import QuestionForm from './QuestionForm';


const AskedQuestions = () => {
    const [openId, setOpenId] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = (id) => {
        setOpenId(openId === id ? null : id);
    };


    return (
        <section className="container mt-16">
            <QuestionTitle setIsOpen={setIsOpen} />
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
            <DialogModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Ask a New Question"} >
                <QuestionForm />
            </DialogModal>
        </section>
    );
};

export default AskedQuestions;
