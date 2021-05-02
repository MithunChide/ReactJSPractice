import React from 'react';
import './Popup.css';

const Popup = (props) => {
return(
    <div className="popup--back">
        <div className="popup--content">
            <div className="popup--close" onClick={props.closePopup}>X</div>
        </div>

    </div>
)
}

export default Popup;