import actionTypes from "./../actionTypes"

const defaultState = {
    paths: {
        APP_URL: process.env.MIX_APP_URL,
        API_URL: `${process.env.MIX_APP_URL}/api`
    },
    showLoader: false,
    alert: {
        showAlert: false,
        alertType: "",
        alertMessage: ""
    },
    languageName: "en",
    languages: []
}

export default function words(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE_NAME: {
            const { languageName } = action.payload;
            return {
                ...state,
                languageName
            };
        }
        case actionTypes.SET_LANGUAGES: {
            const { languages } = action.payload;
            return {
                ...state,
                languages
            };
        }
        default:
            return state;
    }
};