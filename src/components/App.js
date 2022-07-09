import '../styles/App.scss';
import Options from './Options';
import Players from './Players';
import Player from './Player';
import useAppState from './AppState';

function App () {
    const [state, updatePlayers, updatePlayer, addPlayer, removePlayer] = useAppState();

    const players = state.players.map((player) => {
        return (
            <Player
                key={player.id}
                player={player}
                onPlayerChange={updatePlayer}
            />
        );
    });

    return (
        <div className="board">
            <Options
                players={state.players}
                onPlayersChange={updatePlayers}
                onAddPlayer={addPlayer}
                onRemovePlayer={removePlayer}
            />

            <Players playersCount={state.players.length}>
                {players}
            </Players>
        </div>
    );
}

export default App;
