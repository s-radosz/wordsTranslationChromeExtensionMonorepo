import actionTypes from './../actionTypes'

const createWords = (task) => ({
  type: actionTypes.CREATE_WORDS,
  payload: task,
})

const removeWord = (task) => ({
  type: actionTypes.REMOVE_WORD,
  payload: task,
})

export default {
  createWords,
  removeWord,
}
