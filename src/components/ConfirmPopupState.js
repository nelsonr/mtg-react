import { useState } from 'react';

function useConfirmPopupState () {
    const [popupState, setPopupState] = useState({ show: false });

    const showPopup = () => setPopupState({ show: true });
    const hidePopup = () => setPopupState({ show: false });

    return [popupState, showPopup, hidePopup];
}

export default useConfirmPopupState;
