import { useEffect } from 'react';
import { addPlayer, removePlayer, newGame, resetWins } from './OptionsUtils';
import Timer from './Timer';
import useTimerState from './TimerState';

function Options (props) {
    const { players, onPlayersChange } = props;
    const { timer, toggleTimer, increaseTimer, resetTimer } = useTimerState();

    const onAddPlayer = () => onPlayersChange(addPlayer(players));
    const onRemovePlayer = () => onPlayersChange(removePlayer(players));
    const onResetWins = () => onPlayersChange(resetWins(players));
    const onNewGame = () => {
        onPlayersChange(newGame(players));
        resetTimer();
    };

    useEffect(() => {
        let t;

        if (timer.running) {
            t = setTimeout(() => {
                increaseTimer();
            }, 1000);
        }

        return () => clearTimeout(t);
    });

    return (
        <div className="game-options-container">
            <div className="game-option option-group">
                <button className="option-reset-game" onClick={onNewGame}>New Game</button>
                <button className="option-reset-wins" onClick={onResetWins}>Reset Wins</button>
            </div>

            <div className="game-option">
                <Timer timer={timer} onTimerToggle={toggleTimer} />
            </div>

            <div className="game-option option-group">
                <button
                    className="option"
                    disabled={players.length < 3}
                    onClick={onRemovePlayer}
                >Remove Player</button>
                <button className="option" onClick={onAddPlayer}>Add Player</button>
            </div>
        </div>
    );
}

export default Options;
