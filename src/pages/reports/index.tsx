// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import TrendingDown from 'mdi-material-ui/TrendingDown'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import CartOutline from 'mdi-material-ui/CartOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import PackageVariant from 'mdi-material-ui/PackageVariant'

// Örnek rapor verileri
const statistics = [
  {
    title: 'Toplam Satış',
    value: '156.789 TL',
    change: '+12%',
    trend: 'up',
    icon: CurrencyUsd,
    color: 'primary'
  },
  {
    title: 'Toplam Sipariş',
    value: '1,234',
    change: '+8%',
    trend: 'up',
    icon: CartOutline,
    color: 'success'
  },
  {
    title: 'Aktif Müşteriler',
    value: '892',
    change: '+5%',
    trend: 'up',
    icon: AccountOutline,
    color: 'warning'
  },
  {
    title: 'Toplam Ürün',
    value: '156',
    change: '-2%',
    trend: 'down',
    icon: PackageVariant,
    color: 'info'
  }
]

const marketplaceStats = [
  {
    title: 'Hepsiburada',
    orders: '523',
    revenue: '68.450 TL',
    change: '+15%'
  },
  {
    title: 'Trendyol',
    orders: '412',
    revenue: '52.120 TL',
    change: '+10%'
  },
  {
    title: 'N11',
    orders: '299',
    revenue: '36.219 TL',
    change: '+5%'
  }
]

const ReportsPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Raporlar
        </Typography>
      </Grid>
      
      {/* İstatistik Kartları */}
      {statistics.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h6" sx={{ my: 2 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: stat.trend === 'up' ? 'success.main' : 'error.main',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {stat.trend === 'up' ? <TrendingUp sx={{ mr: 0.5 }} /> : <TrendingDown sx={{ mr: 0.5 }} />}
                    {stat.change}
                  </Typography>
                </Box>
                <Box sx={{ 
                  p: 2, 
                  borderRadius: 1,
                  color: `${stat.color}.main`,
                  bgcolor: `${stat.color}.light`
                }}>
                  {<stat.icon />}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Pazaryeri İstatistikleri */}
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ marginY: 2 }}>
          Pazaryeri Performansı
        </Typography>
      </Grid>
      {marketplaceStats.map((marketplace, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {marketplace.title}
              </Typography>
              <Box sx={{ my: 4 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Sipariş Sayısı
                </Typography>
                <Typography variant="h6">
                  {marketplace.orders}
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Toplam Gelir
                </Typography>
                <Typography variant="h6">
                  {marketplace.revenue}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ 
                color: 'success.main',
                display: 'flex',
                alignItems: 'center'
              }}>
                <TrendingUp sx={{ mr: 0.5 }} />
                {marketplace.change} büyüme
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ReportsPage 