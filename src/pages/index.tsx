// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Custom Components Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CustomCard from 'src/views/dashboard2/CustomCard'

// ** i18n Import
import { useTranslation } from 'react-i18next'

const Dashboard2 = () => {
  const { t } = useTranslation('common')

  return (
    <ApexChartWrapper>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h4' gutterBottom>
          {t('dashboard.marketplace.title')}
        </Typography>
      </Box>
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          height: '100%',
          alignItems: 'stretch',
          '& .MuiGrid-item': {
            display: 'flex'
          }
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard 
            imageUrl='/images/brandPhotos/hepsiburada.png' 
            title={t('dashboard.marketplace.hepsiburada')}
            description="" 
            detailsPath="/details/hepsiburada"
            detailsText={t('dashboard.marketplace.details')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard 
            imageUrl='/images/brandPhotos/N11.png' 
            title={t('dashboard.marketplace.n11')}
            description="" 
            detailsPath="/details/n11"
            detailsText={t('dashboard.marketplace.details')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard 
            imageUrl='/images/brandPhotos/trendyol.png' 
            title={t('dashboard.marketplace.trendyol')}
            description="" 
            detailsPath="/details/trendyol"
            detailsText={t('dashboard.marketplace.details')}
          />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard2
