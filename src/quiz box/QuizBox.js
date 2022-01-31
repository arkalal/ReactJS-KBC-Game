import React, { useEffect, useState } from 'react';
import './QuizBox.css'

const QuizBox = ({ data, setTimeout, setQuestionNumber, questionNumber }) => {

    const [Question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    return <div className='trivia'>
        <div className="questions"> {Question?.question} </div>

        <div className="answers">
            {Question?.answers.map((a) => (
                <div className="answer"> {a.text} </div>
            ))}
        </div>
    </div>;
};

export default QuizBox;
