import React, { useState } from 'react';
import './App.css'
import MoneyPyramid from './money pyramid/MoneyPyramid';
import QuizBox from './quiz box/QuizBox';

const App = () => {

    const [QuestionNumber, setQuestionNumber] = useState(1);
    const [Stop, setStop] = useState(false);

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

    return <div className='app'>
        <div className="main">
            <div className="top">
                <div className="timer">30</div>
            </div>

            <div className="bottom">
                <QuizBox data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={QuestionNumber}></QuizBox>
            </div>
        </div>

        <div className="pyramid">
            <ul className="moneyList">
                <MoneyPyramid number={15} QuestionNumber={QuestionNumber} money='$ 1000000'></MoneyPyramid>
                <MoneyPyramid number={14} QuestionNumber={QuestionNumber} money='$ 5000000'></MoneyPyramid>
                <MoneyPyramid number={13} QuestionNumber={QuestionNumber} money='$ 250000'></MoneyPyramid>
                <MoneyPyramid number={12} QuestionNumber={QuestionNumber} money='$ 125000'></MoneyPyramid>
                <MoneyPyramid number={11} QuestionNumber={QuestionNumber} money='$ 64000'></MoneyPyramid>
                <MoneyPyramid number={10} QuestionNumber={QuestionNumber} money='$ 32000'></MoneyPyramid>
                <MoneyPyramid number={9} QuestionNumber={QuestionNumber} money='$ 16000'></MoneyPyramid>
                <MoneyPyramid number={8} QuestionNumber={QuestionNumber} money='$ 8000'></MoneyPyramid>
                <MoneyPyramid number={7} QuestionNumber={QuestionNumber} money='$ 4000'></MoneyPyramid>
                <MoneyPyramid number={6} QuestionNumber={QuestionNumber} money='$ 2000'></MoneyPyramid>
                <MoneyPyramid number={5} QuestionNumber={QuestionNumber} money='$ 1000'></MoneyPyramid>
                <MoneyPyramid number={4} QuestionNumber={QuestionNumber} money='$ 500'></MoneyPyramid>
                <MoneyPyramid number={3} QuestionNumber={QuestionNumber} money='$ 300'></MoneyPyramid>
                <MoneyPyramid number={2} QuestionNumber={QuestionNumber} money='$ 200'></MoneyPyramid>
                <MoneyPyramid number={1} QuestionNumber={QuestionNumber} money='$ 100'></MoneyPyramid>
            </ul>
        </div>
    </div>;
};

export default App;
