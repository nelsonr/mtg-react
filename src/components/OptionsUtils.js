import { randomColor } from '../ColorsUtils';

export function addPlayer (players) {
    return [...players, {
        id: players.length,
        name: `Player ${players.length + 1}`,
        color: randomColor(),
        life: 20,
        wins: 0,
        energy: 0
    }];
}

export function removePlayer (players) {
    return players.slice(0, players.length - 1);
}

export function newGame (players) {
    return players.map((player) => {
        player.life = 20;
        player.energy = 0;

        return player;
    });
}

export function resetWins (players) {
    return players.map((player) => {
        player.wins = 0;

        return player;
    });
}
