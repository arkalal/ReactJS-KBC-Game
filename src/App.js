import React, { useEffect, useState } from 'react';
import './App.css'
import QuizBox from './quiz box/QuizBox';
import { moneyPyramid } from './MoneyPyramid';

const App = () => {

    const [QuestionNumber, setQuestionNumber] = useState(1);
    const [Stop, setStop] = useState(false);
    const [Earned, setEarned] = useState('$ 0');

    const data = [
        {
            id: 1,
            question: "Rolex is a company that specializes in what type of product?",
            answers: [
                {
                    text: "Phone",
                    correct: false,
                },
                {
                    text: "Watches",
                    correct: true,
                },
                {
                    text: "Food",
                    correct: false,
                },
                {
                    text: "Cosmetic",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "When did the website `Facebook` launch?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },
        {
            id: 3,
            question: "Who played the character of harry potter in movie?",
            answers: [
                {
                    text: "Johnny Deep",
                    correct: false,
                },
                {
                    text: "Leonardo Di Caprio",
                    correct: false,
                },
                {
                    text: "Denzel Washington",
                    correct: false,
                },
                {
                    text: "Daniel Red Cliff",
                    correct: true,
                },
            ],
        },
    ];

    useEffect(() => {
        QuestionNumber > 1 &&
            setEarned(moneyPyramid.find((m) => m.id === QuestionNumber - 1).amount);
    }, [QuestionNumber]);

    return <div className='app'>
        <div className="main">
            {
                Stop ?
                    (<><div className="endText">
                        <h1>You earned: {Earned} </h1>
                        <p className='endTextCopyright'>&copy; Developed by Arka Lal Chakravarty</p>
                    </div></>)
                    :
                    (<> <div className="top">
                        <div className="timer">30</div>
                    </div>

                        <div className="bottom">
                            <QuizBox data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={QuestionNumber}></QuizBox>
                        </div> </>)
            }

        </div>

        <div className="pyramid">
            <ul className="moneyList">
                {moneyPyramid.map((m) => (
                    <li
                        className={
                            QuestionNumber === m.id
                                ? "moneyListItem active"
                                : "moneyListItem"
                        }
                    >
                        <span className="moneyListItemNumber">{m.id}</span>
                        <span className="moneyListItemAmount">{m.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>;
};

export default App;
