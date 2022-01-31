import React, { useState } from 'react';
import './App.css'
import MoneyPyramid from './money pyramid/MoneyPyramid';
import QuizBox from './quiz box/QuizBox';

const App = () => {

    const [QuestionNumber, setQuestionNumber] = useState('5');

    return <div className='app'>
        <div className="main">
            <div className="top">
                <div className="timer">30</div>
            </div>

            <div className="bottom">
                <QuizBox></QuizBox>
            </div>
        </div>

        <div className="pyramid">
            <ul className="moneyList">
                <MoneyPyramid number='15' QuestionNumber={QuestionNumber} money='$ 1000000'></MoneyPyramid>
                <MoneyPyramid number='14' QuestionNumber={QuestionNumber} money='$ 5000000'></MoneyPyramid>
                <MoneyPyramid number='13' QuestionNumber={QuestionNumber} money='$ 250000'></MoneyPyramid>
                <MoneyPyramid number='12' QuestionNumber={QuestionNumber} money='$ 125000'></MoneyPyramid>
                <MoneyPyramid number='11' QuestionNumber={QuestionNumber} money='$ 64000'></MoneyPyramid>
                <MoneyPyramid number='10' QuestionNumber={QuestionNumber} money='$ 32000'></MoneyPyramid>
                <MoneyPyramid number='9' QuestionNumber={QuestionNumber} money='$ 16000'></MoneyPyramid>
                <MoneyPyramid number='8' QuestionNumber={QuestionNumber} money='$ 8000'></MoneyPyramid>
                <MoneyPyramid number='7' QuestionNumber={QuestionNumber} money='$ 4000'></MoneyPyramid>
                <MoneyPyramid number='6' QuestionNumber={QuestionNumber} money='$ 2000'></MoneyPyramid>
                <MoneyPyramid number='5' QuestionNumber={QuestionNumber} money='$ 1000'></MoneyPyramid>
                <MoneyPyramid number='4' QuestionNumber={QuestionNumber} money='$ 500'></MoneyPyramid>
                <MoneyPyramid number='3' QuestionNumber={QuestionNumber} money='$ 300'></MoneyPyramid>
                <MoneyPyramid number='2' QuestionNumber={QuestionNumber} money='$ 200'></MoneyPyramid>
                <MoneyPyramid number='1' QuestionNumber={QuestionNumber} money='$ 100'></MoneyPyramid>
            </ul>
        </div>
    </div>;
};

export default App;
