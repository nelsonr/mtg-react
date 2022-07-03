import { useState } from 'react';

const defaultState = {
    players: [
        {
            id: 0,
            name: 'Player 1',
            color: 'red',
            life: 20,
            wins: 0,
            energy: 0
        },
        {
            id: 1,
            name: 'Player 2',
            color: 'green',
            life: 20,
            wins: 0,
            energy: 0
        }
    ]
};

function useAppState (initialState = defaultState) {
    const [state, setState] = useState(initialState);

    function updatePlayer (playerId, prop, newValue) {
        const players = state.players.map((player) => {
            if (player.id === playerId) {
                player[prop] = newValue;
            }

            return player;
        });

        setState({ players });
    }

    function updatePlayers (players) {
        setState({ players });
    }

    return [state, updatePlayers, updatePlayer];
}

export default useAppState;
