import actionTypes from './../actionTypes'

const setLanguageName = (languageName) => ({
  type: actionTypes.SET_LANGUAGE_NAME,
  payload: languageName,
})

const setLanguages = (languages) => ({
  type: actionTypes.SET_LANGUAGES,
  payload: languages,
})

export default {
  setLanguageName,
  setLanguages,
}
