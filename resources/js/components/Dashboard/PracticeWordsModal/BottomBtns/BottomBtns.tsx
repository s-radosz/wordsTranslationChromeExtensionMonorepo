import * as React from "react";

const BottomBtns = ({ handleWordRemove, handleNextWord }) => {
    return (
        <div className="illustration__content--btns">
            <button className="btn red-btn box-shadow" onClick={handleWordRemove}>
                Usuń
            </button>
            <button className="btn red-btn box-shadow" onClick={handleNextWord}>
                Następne
            </button>
        </div>
    )
}

export default BottomBtns;