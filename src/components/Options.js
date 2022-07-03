import { addPlayer, removePlayer, newGame, resetWins } from './OptionsUtils';

function Options (props) {
    const { players, onPlayersChange } = props;

    const onAddPlayer = () => onPlayersChange(addPlayer(players));
    const onRemovePlayer = () => onPlayersChange(removePlayer(players));
    const onNewGame = () => onPlayersChange(newGame(players));
    const onResetWins = () => onPlayersChange(resetWins(players));

    return (
        <div className="game-options-container">
            <div className="game-option option-group">
                <button className="option-reset-game" onClick={onNewGame}>New Game</button>
                <button className="option-reset-wins" onClick={onResetWins}>Reset Wins</button>
            </div>

            <div className="game-option">
                <div className="timer-container">
                    <div className="timer">00:00:00</div><button className="btn-sm">Start</button>
                </div>
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
