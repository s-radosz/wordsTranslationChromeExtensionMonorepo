import * as React from "react";

const SingleOption = ({ checkWordSelection, singleOption, wordAnswerStatus }) => {
    const [wordSelected, setWordSelected] = React.useState(false);

    const handleWordSelect = () => {
        if (!wordAnswerStatus) {
            checkWordSelection(singleOption.pl)
            setWordSelected(true)
        }
    }

    React.useEffect(() => {
        //console.log(["singleOption", singleOption])
        setWordSelected(false)
    }, [singleOption]);

    return (
        <button className={`select-word__options--btn ${wordSelected && wordAnswerStatus && `select-word__options--btn-${wordAnswerStatus}`}`} onClick={() => handleWordSelect()}>
            {singleOption && singleOption.pl && singleOption.pl.toLowerCase()}
        </button>
    )
}

export default SingleOption;