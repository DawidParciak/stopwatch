import { useState } from 'react';
import styles from './Counter.module.scss';
import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';

const Counter = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null)
    
    const start = () => {
        setTimer(setInterval(() => {
            setTime(prevValue => prevValue + 1);
        }, 1))
    };

    const stop = () => {
        clearInterval(timer);
    }

    const reset = () => {
        setTime(0);
    }

    return (
        <div className={styles.counter}>
            <div>
                <FormattedTime time={time} />
            </div>
            <div className={styles.button}>
                <Button onClick={start}>start</Button>
                <Button onClick={stop}>stop</Button>
                <Button onClick={reset}>reset</Button>
            </div>
        </div>
    );
};

export default Counter
