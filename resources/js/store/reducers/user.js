import actionTypes from './../actionTypes'

const defaultState = {
  email: '',
  token: '',
  email_verified_at: '',
  countSavedWordsOverall: 0,
  countSavedWordsLastWeek: 0,
  countSavedWordsToday: 0,
}

export default function user(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CREATE_USER: {
      //console.log(["action.payload", action.payload]);
      return {
        ...state,
        email: action.payload.user.email,
        token: action.payload.token,
        email_verified_at: action.payload.user.email_verified_at,
        id: action.payload.user.id,
      }
    }

    case actionTypes.LOGOUT_USER: {
      localStorage.clear()
      return defaultState
    }

    case actionTypes.UPDATE_USER_WORDS_COUNTS: {
      //console.log(["action.payload UPDATE_USER_WORDS_COUNTS", action.payload]);
      return {
        ...state,
        countSavedWordsOverall: action.payload.wordsOverallCount,
        countSavedWordsLastWeek: action.payload.wordsWeekCount,
        countSavedWordsToday: action.payload.wordsTodayCount,
      }
    }

    default:
      return state
  }
}
