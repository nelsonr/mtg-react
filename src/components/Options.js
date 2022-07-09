import { useEffect } from 'react';
import ConfirmPopup from './ConfirmPopup';
import useConfirmPopupState from './ConfirmPopupState';
import Timer from './Timer';
import useTimerState from './TimerState';

function newGame (players) {
    return players.map((player) => {
        player.life = 20;
        player.energy = 0;

        return player;
    });
}

function resetWins (players) {
    return players.map((player) => {
        player.wins = 0;

        return player;
    });
}

function Options ({ players, onAddPlayer, onRemovePlayer, onPlayersChange }) {
    const { timer, toggleTimer, increaseTimer, resetTimer } = useTimerState();
    const [newGamePopup, showNewGamePopup, hideNewGamePopup] = useConfirmPopupState();
    const [resetWinsPopup, showResetWinsPopup, hideResetWinsPopup] = useConfirmPopupState();

    const confirmNewGame = () => showNewGamePopup();
    const onNewGameConfirm = (confirm) => {
        if (confirm) {
            onPlayersChange(newGame(players));
            resetTimer();
        }

        hideNewGamePopup();
    };

    const confirmResetWins = () => showResetWinsPopup();
    const onResetWinsConfirm = (confirm) => {
        if (confirm) {
            onPlayersChange(resetWins(players));
        }

        hideResetWinsPopup();
    };

    useEffect(() => {
        let timerId = null;

        if (timer.running) {
            timerId = setTimeout(() => {
                increaseTimer();
            }, 1000);
        }

        return () => clearTimeout(timerId);
    }, [timer.running, timer.seconds]);

    return (
        <>
            <div className="game-options-container">
                <div className="game-option option-group">
                    <button className="option-reset-game" onClick={confirmNewGame}>New Game</button>
                    <button className="option-reset-wins" onClick={confirmResetWins}>Reset Wins</button>
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

            <ConfirmPopup
                message="New Game?"
                show={newGamePopup.show}
                onConfirm={(resp) => onNewGameConfirm(resp)}
            />

            <ConfirmPopup
                message="Reset Wins?"
                show={resetWinsPopup.show}
                onConfirm={(resp) => onResetWinsConfirm(resp)}
            />
        </>
    );
}

export default Options;
