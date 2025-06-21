import React from 'react';
import { useState,useRef } from 'react';

const Timer : React.FC = () => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    
    const startTimer = () => {
    if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
         setTime(prev => prev + 1);
        }, 1000);
    }
    };
    const pauseTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    const ResetTimer = () => {
        setTime(0);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
      <div>
        <h1>Timer</h1>
        <p>{time}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={ResetTimer}>Reset</button>
      </div>  
    )
}

export default Timer;