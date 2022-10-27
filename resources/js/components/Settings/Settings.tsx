import * as React from 'react'
import WORDSACTIONS from '../../store/actions/wordsActions'
import USERACTIONS from '../../store/actions/userActions'
import { connect } from 'react-redux'
import { handleGetRequest, handleRemoveRequest, handlePostRequest } from './../helpers/api'
import useReturnTranslation from './../../hooks/useReturnTranslation'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import useFetchData from './../../hooks/useFetchData'

interface SettingsProps {
  handleChangePath: (path: string) => void
  handleShowAlert: (message: string, status: string) => void
  translations?: any
  user?: any
  config?: any
  logout: any
  createUser: any
  createWords: any
}

const Settings = ({
  handleChangePath,
  handleShowAlert,
  translations,
  user,
  config,
  logout,
  createUser,
  createWords,
}: SettingsProps) => {
  const [country, setCountry] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (user) {
      console.log(['user', user])
    }
  }, [])

  React.useEffect(() => {
    setCountry(user?.translate_from)
  }, [user?.translate_from])

  const { data, loading } = useFetchData('/api/languages')

  const handleLogout = () => {
    logout()
    handleChangePath('/')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const getWordsList = async () => {
    let wordsResult = await handleGetRequest(
      `${config?.paths?.API_URL}/words/all/${user?.id}`,
      user?.token,
    )

    createWords(wordsResult)
  }

  const handleChange = async (event: any) => {
    setCountry(event?.target?.value)

    let token = user?.token

    await handlePostRequest(
      `${config?.paths?.API_URL}/user/update-translate-from`,
      {
        userId: user?.id,
        language: event?.target?.value,
      },
      user?.token,
    )
      .then(async (res) => {
        let user = JSON.parse(localStorage?.getItem('user'))
        user = { ...user, translate_from: event?.target?.value }
        localStorage?.setItem('user', JSON.stringify(user))

        console.log(['user?.token', token, user])

        createUser({
          token: token,
          user: user,
        })

        await getWordsList()

        return handleShowAlert(`Poprawnie zapisano`, 'success')
      })
      .catch((err) => {
        return handleShowAlert('Wystąpił błąd przy zapisie', 'danger')
      })
  }

  return (
    <div className='settings'>
      <div className='settings__select-country'>
        <p>{useReturnTranslation(translations, 'TranslateToEnglishFrom')}</p>

        {/* @ts-ignore */}
        {data?.length ? (
          <FormControl className='language-switch'>
            <InputLabel htmlFor='open-select' />
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={country}
              name='country'
              onChange={(event) => handleChange(event)}
              inputProps={{
                id: 'open-select',
              }}
            >
              {
                // @ts-ignore
                data?.map((option, key) => (
                  <MenuItem value={option?.name} key={key}>
                    <img src={option?.img_src} alt={option?.name} />
                    <p>{option?.name}</p>
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        ) : null}
      </div>
      <div>
        <button className='menu-btn blue-btn' onClick={handleLogout} id='logout-btn'>
          {useReturnTranslation(translations, 'logOut')}
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  words: state.words || [],
  config: state.config,
  translations: state?.translation?.list,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(USERACTIONS.logoutUser()),
  createUser: (user) => dispatch(USERACTIONS.createUser(user)),
  createWords: (wordsData) => dispatch(WORDSACTIONS.createWords(wordsData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
