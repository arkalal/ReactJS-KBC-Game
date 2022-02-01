import React, { useEffect, useState } from 'react';
import './QuizBox.css'

const QuizBox = ({ data, setStop, setQuestionNumber, questionNumber }) => {

    const [Question, setQuestion] = useState(null);
    const [SelectedAnswer, setSelectedAnswer] = useState(null);
    const [ClassName, setClassName] = useState('answer');

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const handleClick = (a) => {
        setSelectedAnswer(a)
        setClassName('answer active')
        setTimeout(() => {
            setClassName(a.correct ? 'answer correct' : 'answer wrong')
        }, 3000)

        setTimeout(() => {
            if (a.correct) {
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
            } else {
                setStop(true)
            }
        }, 7000)
    }

    return <div className='trivia'>
        <div className="questions"> {Question?.question} </div>

        <div className="answers">
            {Question?.answers.map((a) => (
                <div className={SelectedAnswer === a ? ClassName : 'answer'} onClick={() => handleClick(a)}> {a.text} </div>
            ))}
        </div>
    </div>;
};

export default QuizBox;
