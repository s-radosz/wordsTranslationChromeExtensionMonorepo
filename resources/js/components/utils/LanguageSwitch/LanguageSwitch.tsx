import React, { useEffect } from 'react'
import useFetchData from './../../../hooks/useFetchData'
import { useDispatch, useSelector } from 'react-redux'
import LANGUAGES_ACTIONS from '../../../store/actions/configActions'
import TRANSLATION_ACTIONS from '../../../store/actions/translationActions'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import axios from 'axios'

const LanguageSwitch = () => {
  const [country, setCountry] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()

  const handleChange = (event: any, isFromLocalStorage?: boolean) => {
    // dispatch({ type: LANGUAGES_ACTIONS.setLanguageName, languageName: event.target.value });
    dispatch(
      LANGUAGES_ACTIONS?.setLanguageName({
        languageName: isFromLocalStorage ? event : event?.target?.value,
      }),
    )
    setCountry(isFromLocalStorage ? event : event?.target?.value)
    localStorage.setItem('pageLanguage', isFromLocalStorage ? event : event?.target?.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const { data, loading } = useFetchData('/api/languages')

  useEffect(() => {
    setCountry('en')
  }, [])

  //@ts-ignore
  useEffect(() => {
    const getTranslationsByData = async () => {
      dispatch(LANGUAGES_ACTIONS?.setLanguages({ languages: data }))

      try {
        const response = await axios.post('/api/translations', {
          languageName: country,
        })
        dispatch(
          TRANSLATION_ACTIONS?.setTranslations({
            translations: response?.data,
          }),
        )
      } catch (error) {
        // console.error(error)
      }
    }

    //@ts-ignore
    if (data?.length) {
      getTranslationsByData()
    }
  }, [data])

  //@ts-ignore
  useEffect(() => {
    const pageLanguage = localStorage?.getItem('pageLanguage')

    if (pageLanguage) {
      handleChange(pageLanguage, true)
    }

    const getTranslationsByCountry = async () => {
      try {
        const response = await axios.post('/api/translations', {
          languageName: pageLanguage ? pageLanguage : country,
        })
        dispatch(
          TRANSLATION_ACTIONS?.setTranslations({
            translations: response?.data,
          }),
        )
      } catch (error) {
        console.error(error)
      }
    }

    if (pageLanguage || country) {
      getTranslationsByCountry()
    }
  }, [country])

  return (
    // <>
    //     <p>test</p>
    // </>
    <>
      <FormControl className='language-switch'>
        <InputLabel htmlFor='open-select' />
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          name='country'
          onChange={(event) => handleChange(event, false)}
          inputProps={{
            id: 'open-select',
          }}
        >
          {/* @ts-ignore */}
          {data?.length &&
            // @ts-ignore
            data?.map((option, key) => (
              <MenuItem value={option?.name} key={key}>
                <img src={option?.img_src} alt={option?.name} />
                <p>{option?.name}</p>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  )
}

export default LanguageSwitch
