import React, { useEffect, useState } from 'react';
import './App.css'
import QuizBox from './quiz box/QuizBox';
import Timer from './timer/Timer';

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

    const moneyPyramid = [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
    ].reverse()

    useEffect(() => {
        QuestionNumber > 1 &&
            setEarned(moneyPyramid.find((m) => m.id === QuestionNumber - 1).amount);
    }, [QuestionNumber, moneyPyramid]);

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
                        <div className="timer"> <Timer setStop={setStop} questionNumber={QuestionNumber}></Timer> </div>
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
