import * as React from "react";

const ContentModal = ({ setShowModal, children }) => {
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="illustration__container">
            <div className="illustration__wrapper">
                <div className="illustration__overlay" onClick={closeModal}></div>
                <div className="illustration__content">
                    <div className="close">
                        <div className="close-icon__container">
                            <img src="/images/close.png" onClick={closeModal} />
                        </div>
                    </div>

                    {children}
                </div>
            </div>


        </div>
    )
}

export default ContentModal;