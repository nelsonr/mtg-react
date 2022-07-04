function Timer ({ timer, onTimerToggle }) {
    const displayTimer = () => {
        return new Date(timer.seconds * 1000).toISOString().substring(11, 19);
    };

    const timerButtonText = () => {
        if (timer.seconds < 1) {
            return 'start';
        }

        if (timer.running) {
            return 'pause';
        }

        return 'resume';
    };

    return (
        <div className="timer-container">
            <div className="timer">{displayTimer(timer)}</div>
            <button className="btn-sm" onClick={onTimerToggle}>{timerButtonText()}</button>
        </div>
    );
}

export default Timer;
