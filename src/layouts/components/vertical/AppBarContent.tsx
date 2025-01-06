// ** React Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { setLanguage } from 'src/store/language'

// ** i18n Import
import { useTranslation } from 'react-i18next'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  const {  i18n } = useTranslation()

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value
    dispatch(setLanguage(newLang))
    i18n.changeLanguage(newLang)
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <FormControl size='small' sx={{ ml: 2, minWidth: 120 }}>
          <Select
            value={currentLanguage}
            onChange={handleLanguageChange}
            sx={{ height: 40 }}
          >
            <MenuItem value='en'>English</MenuItem>
            <MenuItem value='tr'>Türkçe</MenuItem>
          </Select>
        </FormControl>
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
