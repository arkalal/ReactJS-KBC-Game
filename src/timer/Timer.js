import { useEffect, useState } from 'react';

const Timer = ({ setStop, questionNumber }) => {

    const [Timer, setTimer] = useState(30);

    useEffect(() => {
        if (Timer === 0) {
            setStop(true)
        }
        const interval = setInterval(() => {
            setTimer((current) => current - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [Timer, setStop])

    useEffect(() => {
        setTimer(30)
    }, [questionNumber])

    return Timer;
};

export default Timer;
