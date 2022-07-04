import { useState } from 'react';

function useTimerState () {
    const [timer, setTimer] = useState({
        seconds: 0,
        running: false
    });

    const increaseTimer = () => setTimer({ ...timer, seconds: timer.seconds + 1 });
    const resetTimer = () => setTimer({ seconds: 0, running: false });

    const toggleTimer = () => {
        const seconds = timer.seconds < 1 ? timer.seconds + 1 : timer.seconds;

        setTimer({ seconds, running: !timer.running });
    };

    return { timer, toggleTimer, increaseTimer, resetTimer };
}

export default useTimerState;
