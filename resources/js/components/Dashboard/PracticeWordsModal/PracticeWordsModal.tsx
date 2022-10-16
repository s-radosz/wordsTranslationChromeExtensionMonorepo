import * as React from "react";
import ContentModal from "./../../helpers/ContentModal"
import BottomBtns from "./BottomBtns/BottomBtns"
import SelectWord from "./SelectWord/SelectWord"
import { handleGetRequest, handlePostRequest } from "./../../helpers/api"
import { connect } from "react-redux";

interface IDrawnWord {
    id: number
}

const PracticeWordsModal = ({ config, user, setShowPracticeWordsModal, handleRemoveWord }) => {
    const [drawnWord, setDrawnWord] = React.useState<IDrawnWord | undefined>(undefined);
    const [randomWordsList, setRandomWordsList] = React.useState([])
    const [wordAnswerStatus, setWordAnswerStatus] = React.useState("");
    const [blockSelect, setBlockSelect] = React.useState(false)
    const [showWordTranslation, setShoWordTranslation] = React.useState(false)

    const getDrawnWord = async () => {
        await handleGetRequest(`${config.paths.API_URL}/words/random/new/1/${user.id}`, user.token).then(res => {
            setWordAnswerStatus("")
            setBlockSelect(false)
            setDrawnWord(res[0]);
            getRandomWords();
            setShoWordTranslation(false)

        })
    }

    const getRandomWords = async () => {
        await handleGetRequest(`${config.paths.API_URL}/words/random/new/3/${user.id}`, user.token).then((res: any) => {
            setRandomWordsList(res);
        })
    }

    const checkWordSelection = async (selectedTranslation: string) => {
        if (!blockSelect) {
            await handlePostRequest(`${config.paths.API_URL}/words/check`, {
                wordId: drawnWord.id,
                selectedTranslation: selectedTranslation,
            }, user.token).then((res: string) => {
                setBlockSelect(true)
                setWordAnswerStatus(res)
                setShoWordTranslation(true)
            })
        }
    }

    React.useEffect(() => {
        getDrawnWord();
    }, [])

    return (
        <ContentModal setShowModal={setShowPracticeWordsModal}>
            <>
                <div className="select-word__container">
                    <SelectWord
                        drawnWord={drawnWord}
                        randomWordsList={randomWordsList}
                        checkWordSelection={checkWordSelection}
                        wordAnswerStatus={wordAnswerStatus}
                        showWordTranslation={showWordTranslation}
                    />
                </div>
                <BottomBtns
                    handleWordRemove={handleRemoveWord}
                    handleNextWord={getDrawnWord}
                />
            </>
        </ContentModal>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    config: state.config
});


export default connect(
    mapStateToProps,
    {}
)(PracticeWordsModal);