import './styles/App.css';
import Options from './components/Options';
import Players from './components/Players';
import Player from './components/Player';
import useAppState from './AppState';

function App () {
    const [state, updatePlayers, updatePlayer] = useAppState();

    const players = state.players.map((player) => {
        return (
            <Player
                key={player.id}
                player={player}
                onColorChange={(color) => updatePlayer(player.id, 'color', color)}
                onLifeChange={(life) => updatePlayer(player.id, 'life', life)}
                onWinsChange={(wins) => updatePlayer(player.id, 'wins', wins)}
                onEnergyChange={(energy) => updatePlayer(player.id, 'energy', energy)}
            />
        );
    });

    return (
        <div className="board">
            <Options
                players={state.players}
                onPlayersChange={updatePlayers}
            />

            <Players playersCount={state.players.length}>
                {players}
            </Players>
        </div>
    );
}

export default App;
