import actionTypes from "./../actionTypes"

const defaultState = [];

export default function words(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CREATE_WORDS: {
            //console.log(["action.payload", action.payload]);
            return {
                ...state, result: action.payload
            };
        }

        case actionTypes.REMOVE_WORD: {
            //console.log(["remove word", action.payload, state]);

            return {
                ...state,
                result: {
                    data: state.result.data.filter(singleWord => {
                        return singleWord.id !== action.payload
                    })
                }
            }
        }

        default:
            return state;
    }
};