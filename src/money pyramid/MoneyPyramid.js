import React from 'react';
import './MoneyPyramid.css'

const MoneyPyramid = ({ number, money, QuestionNumber }) => {
    return <div className='moneyPyramid'>
        <li className={QuestionNumber !== number ? 'moneyListItem' : 'moneyListItem active'}>
            <span className="moneyListItemNumber"> {number} </span>
            <span className="moneyListItemAmount"> {money} </span>
        </li>
    </div>;
};

export default MoneyPyramid;
