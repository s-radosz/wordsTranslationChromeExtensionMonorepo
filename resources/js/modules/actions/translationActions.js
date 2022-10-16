import actionTypes from "./../actionTypes"

const setTranslations = translations => ({
    type: actionTypes.SET_TRANSLATIONS,
    payload: translations
});

export default {
    setTranslations
};