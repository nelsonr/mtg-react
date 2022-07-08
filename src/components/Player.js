import { nextColor } from '../ColorsUtils';

function Player ({ player, onPlayerChange }) {
    // Properties
    const { id, name, life, color, wins, energy } = player;

    const onColorChange = (color) => onPlayerChange(id, { ...player, color });
    const onEnergyChange = (energy) => onPlayerChange(id, { ...player, energy });
    const onWinsChange = (wins) => onPlayerChange(id, { ...player, wins });
    const onLifeChange = (life) => onPlayerChange(id, { ...player, life });

    const className = ['player', color].join(' ');

    return (
        <div className={className}>
            <div className="name-container">
                <div className="name">{name}</div>
            </div>

            <div className="life-container" onClick={() => onColorChange(nextColor(color))}>
                <div className="life">{life}</div>
            </div>

            <div className="counters-container">
                <div className="energy-container">
                    <button className="minus-win" disabled={energy < 1} onClick={() => onEnergyChange(energy - 1)}>-</button>
                    <div className="energy">{energy}</div>
                    <button className="plus-win" onClick={() => onEnergyChange(energy + 1)}>+</button>
                </div>
                <div className="wins-container">
                    <button className="minus-win" disabled={wins < 1} onClick={() => onWinsChange(wins - 1)}>-</button>
                    <div className="wins">{wins}</div>
                    <button className="plus-win" onClick={() => onWinsChange(wins + 1)}>+</button>
                </div>
            </div>

            <div className="options-container">
                <div className="options-row">
                    <div className="option" onClick={() => onLifeChange(life + 1)}><button>+1</button></div>
                    <div className="option" onClick={() => onLifeChange(life + 5)}><button>+5</button></div>
                </div>
                <div className="options-row">
                    <div className="option" onClick={() => onLifeChange(life - 1)}><button>-1</button></div>
                    <div className="option" onClick={() => onLifeChange(life - 5)}><button>-5</button></div>
                </div>
            </div>
        </div>
    );
}

export default Player;
