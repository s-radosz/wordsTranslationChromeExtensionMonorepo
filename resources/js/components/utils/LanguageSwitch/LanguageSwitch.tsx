import React, { useEffect } from 'react'
import useFetchData from './../../../hooks/useFetchData'
import { useDispatch, useSelector } from 'react-redux'
import LANGUAGES_ACTIONS from '../../../modules/actions/configActions'
import TRANSLATION_ACTIONS from '../../../modules/actions/translationActions'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import axios from 'axios'

const LanguageSwitch = () => {
  const [country, setCountry] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    // dispatch({ type: LANGUAGES_ACTIONS.setLanguageName, languageName: event.target.value });
    dispatch(
      LANGUAGES_ACTIONS?.setLanguageName({
        languageName: event?.target?.value,
      }),
    )
    setCountry(event?.target?.value)
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
    console.log('1')

    const getTranslationsByData = async () => {
      // dispatch({ type: LANGUAGES_ACTIONS.setLanguages, languages: data });
      dispatch(LANGUAGES_ACTIONS?.setLanguages({ languages: data }))

      try {
        const response = await axios.post('/api/translations', {
          languageName: country,
        })
        console.log(['response?.data', response?.data])
        // dispatch({ type: TRANSLATION_ACTIONS.setTranslations, translations: response?.data });
        dispatch(
          TRANSLATION_ACTIONS?.setTranslations({
            translations: response?.data,
          }),
        )
      } catch (error) {
        console.error(error)
      }
    }

    //@ts-ignore
    if (data?.length) {
      getTranslationsByData()
    }
  }, [data])

  //@ts-ignore
  useEffect(() => {
    console.log('2')

    const getTranslationsByCountry = async () => {
      try {
        const response = await axios.post('/api/translations', {
          languageName: country,
        })
        console.log(['response?.data', response?.data])
        dispatch(
          TRANSLATION_ACTIONS?.setTranslations({
            translations: response?.data,
          }),
        )
      } catch (error) {
        console.error(error)
      }
    }

    if (country) {
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
          onChange={handleChange}
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
