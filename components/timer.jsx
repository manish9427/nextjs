import React from 'react';
import { useState,useRef,useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const [isRunning,setIsRunning] = useState(false);

    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        } else {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };


    useEffect(() => {
        document.title = `Timer App - ${isRunning ? 'Running' : 'Paused'} (${time}s)`;
    }, [time, isRunning]);

    const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
    
    // const startTimer = () => {
    // if (!intervalRef.current) {
    //     intervalRef.current = setInterval(() => {
    //      setTime(prev => prev + 1);
    //     }, 1000);
    // }
    // };
    // const pauseTimer = () => {
        
    //     if (intervalRef.current) {
    //         clearInterval(intervalRef.current);
    //         intervalRef.current = null;
    //     }
    // };
    const ResetTimer = () => {
        setTime(0);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsRunning(false);
    };

    return (
      <div>
        <h1>Timer</h1>
        {/* <p>{time}</p> */}
        <p>{formatTime(time)}</p>
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>&nbsp;
        {/* <button onClick={startTimer}>Start</button> */}
        {/* <button onClick={pauseTimer}>Pause</button> */}
        <button onClick={ResetTimer}>Reset</button>
      </div>  
    )
}

export default Timer;