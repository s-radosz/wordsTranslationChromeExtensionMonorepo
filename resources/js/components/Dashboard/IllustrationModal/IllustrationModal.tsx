import * as React from "react";
import IllustrationDrawer from "./IllustrationDrawer/IllustrationDrawer"
import BottomBtns from "./BottomBtns/BottomBtns"
import close from "./../../../../assets/images/close.png";
import { handlePostRequest, handleRemoveRequest } from "./../../helpers/api"
import { connect } from "react-redux";
import ContentModal from "./../../helpers/ContentModal"

const IllustrationModal = ({ handleShowAlert, setShowIllustrationModal, currentWordIdIllustration, config, user }) => {
    const [leftPersonText, setLeftPersonText] = React.useState("");
    const [rightPersonText, setRightPersonText] = React.useState("");

    const canvasImage = React.useRef(null);

    const closeModal = () => {
        setShowIllustrationModal(false);
    }

    const handleFormatCanvasText = (text: string) => {
        //add \n every 3 third word
        return text.split(/((?:\w+ ){3})/g).filter(Boolean).join("\n");
    }

    const handleTextChange = (direction: string) => {
        //console.log(["handleTextChange", direction])

        const ctx = canvasImage.current.getContext('2d');
        ctx.font = "14px Arial";
        let lineheight = 15;

        if (direction === "left") {
            let lines = handleFormatCanvasText(leftPersonText).split('\n');
            //x, y, max-width
            for (var i = 0; i < lines.length; i++)
                ctx.fillText(lines[i], 30, 100 + (i * lineheight));
        } else {
            let lines = handleFormatCanvasText(rightPersonText).split('\n');
            //x, y, max-width
            for (var i = 0; i < lines.length; i++)
                ctx.fillText(lines[i], 290, 100 + (i * lineheight));
        }
    }

    const handleAddEmptyImageToCanvas = () => {
        //console.log(["canvasImage", canvasImage.current, canvasImage, canvasImage.current.getContext('2d')])
        const ctx = canvasImage.current.getContext('2d');

        var imageObj1 = new Image();
        imageObj1.src = `${config.paths.APP_URL}/images/conversation.png`
        imageObj1.onload = function () {
            ctx.drawImage(imageObj1, 0, 50
                , 400, 200);
        }
    }

    const handleCanvasClear = () => {
        const ctx = canvasImage.current.getContext('2d');

        ctx.clearRect(0, 0, 400, 300);

        handleAddEmptyImageToCanvas();
    }

    const handleSaveIllustration = async () => {
        let base64Canvas = canvasImage.current.toDataURL();

        await handlePostRequest(`${config.paths.API_URL}/words/illustartion/new`, {
            wordId: currentWordIdIllustration,
            base64Image: base64Canvas,

        }, user.token).then(res => {
            handleShowAlert("Poprawnie zapisano", "success")
        }).catch(err => {
            handleShowAlert("Wystąpił błąd przy zapisie", "danger")
        })
    }

    const loadSavedIllustration = async () => {
        await handlePostRequest(`${config.paths.API_URL}/words/illustartion/find`, {
            wordId: currentWordIdIllustration,
        }, user.token).then((res: {
            base64_image: string
        }) => {
            if (res.base64_image) {
                const ctx = canvasImage.current.getContext('2d');
                var imageObj1 = new Image();

                imageObj1.src = res.base64_image;
                imageObj1.onload = function () {
                    ctx.drawImage(imageObj1, 0, 0
                        , 400, 300);
                }
            } else {
                handleAddEmptyImageToCanvas()
            }
        })
    }

    const handleWordIllustrationRemove = async () => {
        await handleRemoveRequest(`${config.paths.API_URL}/words/illustartion/remove`,
            {
                data: {
                    wordId: currentWordIdIllustration
                },
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }).then(res => {
                handleAddEmptyImageToCanvas()
                handleShowAlert("Poprawnie usunięto", "success")
            }).catch(err => {
                handleShowAlert("Wystąpił błąd przy usunięciu", "danger")
            })
    }

    React.useEffect(() => {
        loadSavedIllustration();
    }, [])

    return (
        <ContentModal setShowModal={setShowIllustrationModal}>
            <>
                <div className="illustration__content--elements">
                    <IllustrationDrawer
                        canvasImage={canvasImage}
                        leftPersonText={leftPersonText}
                        setLeftPersonText={setLeftPersonText}
                        rightPersonText={rightPersonText}
                        setRightPersonText={setRightPersonText}
                        handleTextChange={handleTextChange}
                    />
                </div>
                <BottomBtns
                    handleCanvasClear={handleCanvasClear}
                    handleWordIllustrationRemove={handleWordIllustrationRemove}
                    handleSaveIllustration={handleSaveIllustration}
                />
            </>
        </ContentModal>
    )
}

const mapStateToProps = state => ({
    config: state.config,
    user: state.user
});

export default connect(
    mapStateToProps,
    {}
)(IllustrationModal);