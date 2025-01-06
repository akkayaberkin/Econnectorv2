// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Types
interface TransactionData {
  id: string
  date: string
  description: string
  platform: string
  amount: string
  type: 'income' | 'expense'
}

const transactions: TransactionData[] = [
  {
    id: 'TRX001',
    date: '2024-02-20',
    description: 'Satış Geliri - Hepsiburada',
    platform: 'Hepsiburada',
    amount: '₺2,450',
    type: 'income'
  },
  {
    id: 'TRX002',
    date: '2024-02-20',
    description: 'Satış Geliri - Trendyol',
    platform: 'Trendyol',
    amount: '₺3,890',
    type: 'income'
  },
  {
    id: 'TRX003',
    date: '2024-02-19',
    description: 'Platform Komisyonu',
    platform: 'N11',
    amount: '₺340',
    type: 'expense'
  },
  {
    id: 'TRX004',
    date: '2024-02-19',
    description: 'Satış Geliri - N11',
    platform: 'N11',
    amount: '₺1,780',
    type: 'income'
  },
  {
    id: 'TRX005',
    date: '2024-02-18',
    description: 'Kargo Gideri',
    platform: 'Hepsiburada',
    amount: '₺560',
    type: 'expense'
  }
]

const Finance = () => {
  const revenueData = {
    series: [{
      name: 'Gelir',
      data: [44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000]
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül']
      },
      tooltip: {
        y: {
          formatter: (val: number) => `₺${val.toLocaleString()}`
        }
      }
    } as ApexOptions
  }

  const platformData = {
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
          Finans
        </Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader title='Gelir Grafiği' />
          <CardContent>
            <ReactApexcharts
              type='area'
              height={350}
              options={revenueData.options}
              series={revenueData.series}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title='Platform Dağılımı' />
          <CardContent>
            <ReactApexcharts
              type='donut'
              height={350}
              options={platformData.options}
              series={platformData.series}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Son İşlemler' />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='finance table'>
              <TableHead>
                <TableRow>
                  <TableCell>Tarih</TableCell>
                  <TableCell>İşlem No</TableCell>
                  <TableCell>Açıklama</TableCell>
                  <TableCell>Platform</TableCell>
                  <TableCell align='right'>Tutar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.platform}</TableCell>
                    <TableCell 
                      align='right'
                      sx={{ 
                        color: transaction.type === 'income' ? 'success.main' : 'error.main',
                        fontWeight: 600
                      }}
                    >
                      {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Finance 