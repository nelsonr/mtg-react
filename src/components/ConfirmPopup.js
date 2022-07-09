function ConfirmPopup ({ message, show, onConfirm }) {
    const className = `popup-container ${show ? 'show' : ''}`;

    return (
        <div className={className}>
            <div className="popup">
                <div className="popup-message">{message}</div>
                <div className="popup-options game-option">
                    <button className="option" onClick={() => onConfirm(false) }>Nope</button>
                    <button className="option" onClick={() => onConfirm(true) }>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPopup;
