function Players ({ playersCount, children }) {
    const className = [
        'players-container',
        `players-${playersCount}`
    ].join(' ');

    return (
        <div className="overflow-container">
            <div className={className}>{children}</div>
        </div>
    );
}

export default Players;
