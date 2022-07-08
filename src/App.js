import './styles/App.css';
import Options from './components/Options';
import Players from './components/Players';
import Player from './components/Player';
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
