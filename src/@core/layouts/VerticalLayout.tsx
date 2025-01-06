import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// ** Navigation Menu
import Navigation from './components/vertical/navigation'

// ** AppBar Component
import AppBar from './components/vertical/appBar'

// ** i18n Import
import { useTranslation } from 'react-i18next'

// ** Config Import
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  children: ReactNode
  saveSettings: (values: Settings) => void
  verticalNavItems?: VerticalNavItemsType
  verticalAppBarContent?: (props?: any) => ReactNode
  afterVerticalNavMenuContent?: (props?: any) => ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  padding: theme.spacing(6),
  paddingLeft: 0,
  marginLeft: themeConfig.navigationSize,
  transition: 'padding .25s ease-in-out, margin-left .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    padding: theme.spacing(4)
  }
}))

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 2,
  padding: theme.spacing(0, 6, 2),
  paddingLeft: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 4, 2)
  }
}))

const VerticalLayout = (props: Props) => {
  const {
    hidden,
    settings,
    children,
    saveSettings,
    verticalNavItems,
    verticalAppBarContent: userVerticalAppBarContent
  } = props

  const { t } = useTranslation()

  return (
    <VerticalLayoutWrapper>
      <Navigation
        hidden={hidden}
        settings={settings}
        saveSettings={saveSettings}
        verticalNavItems={verticalNavItems}
        sx={{ width: themeConfig.navigationSize }}
      />
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <AppBar
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          verticalAppBarContent={userVerticalAppBarContent}
        />
        <MainContentWrapper>
          <SearchWrapper>
            <TextField
              fullWidth
              size='medium'
              placeholder={t('common.search')}
              sx={{ 
                maxWidth: 500,
                '& .MuiOutlinedInput-root': { 
                  borderRadius: 1,
                  backgroundColor: theme => theme.palette.background.default
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Magnify fontSize='small' />
                  </InputAdornment>
                )
              }}
            />
          </SearchWrapper>
          {children}
        </MainContentWrapper>
      </Box>
    </VerticalLayoutWrapper>
  )
}

export default VerticalLayout
