// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** i18n Import
import { useTranslation } from 'react-i18next'

const Analytics = () => {
  const { t } = useTranslation()

  const salesData = {
    series: [{
      name: 'Hepsiburada',
      data: [44, 55, 57, 56, 61, 58, 63]
    }, {
      name: 'Trendyol',
      data: [76, 85, 101, 98, 87, 105, 91]
    }, {
      name: 'N11',
      data: [35, 41, 36, 26, 45, 48, 52]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
      }
    } as ApexOptions
  }

  const revenueData = {
    series: [44, 55, 13],
    options: {
      chart: {
        type: 'donut'
      },
      labels: ['Hepsiburada', 'Trendyol', 'N11'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    } as ApexOptions
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ mb: 4 }}>
          Analitik
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader title='Haftalık Satış Grafiği' />
          <CardContent>
            <ReactApexcharts 
              type='bar' 
              height={350} 
              options={salesData.options} 
              series={salesData.series} 
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title='Gelir Dağılımı' />
          <CardContent>
            <ReactApexcharts 
              type='donut' 
              height={350} 
              options={revenueData.options} 
              series={revenueData.series} 
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title='Toplam Satış' />
          <CardContent>
            <Typography variant='h4'>₺125,430</Typography>
            <Typography variant='body2' color='text.secondary'>
              Son 7 günlük toplam satış
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title='Ortalama Sipariş Değeri' />
          <CardContent>
            <Typography variant='h4'>₺245</Typography>
            <Typography variant='body2' color='text.secondary'>
              Son 7 günlük ortalama
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title='Toplam Sipariş' />
          <CardContent>
            <Typography variant='h4'>512</Typography>
            <Typography variant='body2' color='text.secondary'>
              Son 7 günlük toplam sipariş
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Analytics 