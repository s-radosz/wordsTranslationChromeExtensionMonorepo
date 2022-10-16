import actionTypes from "./../actionTypes"

const defaultState = {
    list: []
};

export default function translation(state = defaultState, action) {
    console.log(["translation", action])
    switch (action.type) {
        case actionTypes.SET_TRANSLATIONS: {
            const { translations } = action.payload;
            return {
                ...state,
                list: translations
            };
        }
        default: {
            return { ...state };
        }
    }
};