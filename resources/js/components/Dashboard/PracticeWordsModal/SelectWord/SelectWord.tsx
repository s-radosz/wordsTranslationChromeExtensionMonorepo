import * as React from "react";
import SingleOption from "./SingleOption/SingleOption";

const SelectWord = ({
    drawnWord,
    randomWordsList,
    checkWordSelection,
    wordAnswerStatus,
    showWordTranslation
}) => {
    const [allWordsList, setAllWordsList] = React.useState([]);
    const [showIllustration, setShowIllustration] = React.useState(false);

    React.useEffect(() => {
        let combinedWordList = randomWordsList.concat(drawnWord);

        let shuffledWordList = shuffleArray(combinedWordList);

        setAllWordsList(shuffledWordList);

        setShowIllustration(false);
    }, [randomWordsList]);

    const shuffleArray = array => {
        //console.log(array)
        return array.sort(() => Math.random() - 0.5);
    };

    const handleShowIllustration = () => {
        setShowIllustration(true);
    };

    return (
        <>
            <p className="select-word__translation-header">
                {drawnWord?.en && drawnWord?.en?.toLowerCase()}{" "}
                {showWordTranslation &&
                    ` - ${drawnWord?.pl && drawnWord?.pl?.toLowerCase()}`}
            </p>

            <div className="select-word__options">
                {allWordsList?.length &&
                    allWordsList?.map((singleOption, i) => {
                        return (
                            <SingleOption
                                checkWordSelection={checkWordSelection}
                                singleOption={singleOption}
                                wordAnswerStatus={wordAnswerStatus}
                                key={`${singleOption && singleOption?.pl}-${i}`}
                            />
                        );
                    })}
            </div>

            {drawnWord?.illustration && (
                <button
                    className="red-btn box-shadow"
                    onClick={handleShowIllustration}
                >
                    Pokaż ilustrację
                </button>
            )}

            {showIllustration && (
                <img
                    src={drawnWord?.illustration?.base64_image}
                    className="select-word__illustration"
                />
            )}
        </>
    );
};

export default SelectWord;
