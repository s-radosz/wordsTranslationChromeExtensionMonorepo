import * as React from "react";

const PracticeWordsSection = ({ setShowPracticeWordsModal, allowPracticeWords }) => {
    return (
        <div className="dashboard__practice-words-section--container">
            <p>{allowPracticeWords ? "Powtarzaj zapisane słownictwo" : "Nie masz jeszcze żadnych zapisanych słów"}</p>
            {allowPracticeWords && <button className="btn red-btn box-shadow" onClick={() => setShowPracticeWordsModal(true)}>
                Zaczynajmy
            </button>}
        </div>
    )
}

export default PracticeWordsSection;