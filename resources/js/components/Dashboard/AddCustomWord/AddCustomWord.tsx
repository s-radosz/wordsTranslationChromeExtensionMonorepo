import * as React from 'react'
import { handlePostRequest, handleGetRequest } from './../../helpers/api'
import WORDSACTIONS from '../../../store/actions/wordsActions'
import USERACTIONS from '../../../store/actions/userActions'
import { connect } from 'react-redux'

const AddCustomWord = ({ handleShowAlert, user, words, config, createWords, getUserWordsInfo }) => {
  const [word, setWord] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (word) {
      fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${user.translate_from}&dt=t&q=${word}`,
      )
        .then((response) => response?.json())
        .then(async (json) => {
          let translatedWord = json[0][0][0]

          await handlePostRequest(
            `${config?.paths?.API_URL}/words/save`,
            {
              userId: user?.id,
              enWord: word,
              translatedWord: translatedWord,
              userTranslateFrom: user?.translate_from,
            },
            user?.token,
          )
            .then(async (res) => {
              if (res === 'Exist') {
                return handleShowAlert('Podane słowo było już zapisane przez Ciebie', 'danger')
              }

              let wordsResult = await handleGetRequest(
                `${config?.paths?.API_URL}/words/all/${user?.id}?page=1`,
                user?.token,
              )
              createWords(wordsResult)

              getUserWordsInfo()

              return handleShowAlert(`Poprawnie zapisano - ${word} - ${translatedWord}`, 'success')
            })
            .catch((err) => {
              return handleShowAlert('Wystąpił błąd przy zapisie', 'danger')
            })
        })
    } else {
      return handleShowAlert(`Wszystkie pola są wymagane`, 'danger')
    }
  }

  return (
    <div className='add-custom-word__container dashboard__practice-words-section--container'>
      <p>Dodaj nowe słowo</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Wklej słowo do przetłumaczenia'
          type='string'
          value={word}
          onChange={(e) => setWord(e?.target?.value)}
          id='custom-new-word-input'
        />
        <div className='form-group'>
          <button type='submit' className='btn red-btn box-shadow' id='custom-new-word-submit'>
            Dodaj słowo
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  words: state.words || [],
  config: state.config,
})

const mapDispatchToProps = (dispatch) => ({
  createWords: (user) => dispatch(WORDSACTIONS.createWords(user)),
  removeWord: (id) => dispatch(WORDSACTIONS.removeWord(id)),
  updateUserWordsCounts: (payload) => dispatch(USERACTIONS.updateUserWordsCounts(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomWord)
