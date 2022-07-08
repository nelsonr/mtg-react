import { useState } from 'react';
import { randomColor } from './ColorsUtils';

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

    const updatePlayer = (playerId, newPlayerState) => {
        const players = state.players.map((player) => {
            if (player.id === playerId) {
                return { ...player, ...newPlayerState };
            }

            return player;
        });

        setState({ players });
    };

    const updatePlayers = (players) => {
        setState({ players });
    };

    const addPlayer = () => {
        const players = [...state.players, {
            id: state.players.length,
            name: `Player ${state.players.length + 1}`,
            color: randomColor(),
            life: 20,
            wins: 0,
            energy: 0
        }];

        setState({ players });
    };

    const removePlayer = () => {
        const players = state.players.slice(0, state.players.length - 1);

        setState({ players });
    };

    return [state, updatePlayers, updatePlayer, addPlayer, removePlayer];
}

export default useAppState;
