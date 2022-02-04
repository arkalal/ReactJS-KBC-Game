import React, { useRef } from 'react';
import './Start.css'

const Start = ({ setUsername }) => {

    const getValue = useRef()

    const getAccess = () => {
        getValue.current.value && setUsername(getValue.current.value)
    }

    return <div className='startBody'>
        <p>&copy; Developed By Arka Lal Chakravarty (ReactJS)</p>
        <div className="start">
            <input type="text" placeholder='Enter Your Name' className='startInput' ref={getValue} />
            <button className="startButton" onClick={getAccess}>Start</button>
        </div>
    </div>;
};

export default Start;
