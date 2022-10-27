import * as React from 'react'
import WORDSACTIONS from '../../store/actions/wordsActions'
import USERACTIONS from '../../store/actions/userActions'
import { connect } from 'react-redux'
import { handleGetRequest, handleRemoveRequest } from './../helpers/api'
import WordsList from './WordsList/WordsList'
import Statistics from './Statistics/Statistics'
import IllustrationModal from './IllustrationModal/IllustrationModal'
import PracticeWordsSection from './PracticeWordsSection/PracticeWordsSection'
import PracticeWordsModal from './PracticeWordsModal/PracticeWordsModal'
import AddCustomWord from './AddCustomWord/AddCustomWord'

const Dashboard = ({
  handleShowAlert,
  words,
  user,
  config,
  createWords,
  removeWord,
  updateUserWordsCounts,
}) => {
  const [showIllustrationModal, setShowIllustrationModal] = React.useState(false)
  const [showPracticeWordsModal, setShowPracticeWordsModal] = React.useState(false)
  const [currentWordIdIllustration, setCurrentWordIdIllustration] = React.useState(0)

  const getUserWordCounts = async () => {
    if (user?.id && user?.token) {
      try {
        await handleGetRequest(
          `${config?.paths?.API_URL}/words/counts/${user?.id}`,
          user?.token,
        ).then(
          (res: { wordsOverallCount: number; wordsWeekCount: number; wordsTodayCount: number }) => {
            let wordsCountResult = {
              wordsOverallCount: res?.wordsOverallCount,
              wordsWeekCount: res?.wordsWeekCount,
              wordsTodayCount: res?.wordsTodayCount,
            }

            updateUserWordsCounts(wordsCountResult)
          },
        )
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleCheckWordsList = async () => {
    if (words?.length === 0 && user?.id && user?.token) {
      let wordsResult = await handleGetRequest(
        `${config?.paths?.API_URL}/words/all/${user?.id}`,
        user?.token,
      )
      createWords(wordsResult)
    }
  }

  const handleRemoveWord = async (id: number) => {
    console.log(['user?.translate_from', user?.translate_from])
    await handleRemoveRequest(`${config?.paths?.API_URL}/words/remove`, {
      data: {
        id: id,
        userTranslateFrom: user?.translate_from,
      },
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    })

    removeWord(id)
    getUserWordsInfo()
    handleShowAlert('Prawidłowo usunięto.', 'success')
  }

  const handlePageClick = async (pageData: { selected: number }) => {
    let wordsResult = await handleGetRequest(
      `${config?.paths?.API_URL}/words/all/${user?.id}?page=${pageData?.selected + 1}`,
      user?.token,
    )
    createWords(wordsResult)
  }

  const handleAddIllustration = (id: number) => {
    setShowIllustrationModal(true)
    setCurrentWordIdIllustration(id)
  }

  const getUserWordsInfo = () => {
    getUserWordCounts()
    handleCheckWordsList()
  }

  React.useEffect(() => {
    getUserWordsInfo()
  }, [user?.id])

  return (
    <div className='dashboard'>
      <Statistics user={user} />

      <AddCustomWord handleShowAlert={handleShowAlert} getUserWordsInfo={getUserWordsInfo} />

      <WordsList
        handlePageClick={handlePageClick}
        handleRemoveWord={handleRemoveWord}
        handleAddIllustration={handleAddIllustration}
      />

      {showIllustrationModal && (
        <IllustrationModal
          setShowIllustrationModal={setShowIllustrationModal}
          currentWordIdIllustration={currentWordIdIllustration}
          handleShowAlert={handleShowAlert}
        />
      )}

      <PracticeWordsSection
        setShowPracticeWordsModal={setShowPracticeWordsModal}
        allowPracticeWords={words?.result?.data?.length > 0 ? true : false}
      />

      {words?.result?.data?.length && showPracticeWordsModal && (
        <PracticeWordsModal
          setShowPracticeWordsModal={setShowPracticeWordsModal}
          handleRemoveWord={handleRemoveWord}
        />
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
