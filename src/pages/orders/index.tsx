// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'

// ** Types
interface OrderData {
  id: string
  customer: string
  date: string
  amount: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  platform: string
}

const orders: OrderData[] = [
  {
    id: '#ORD001',
    customer: 'Ahmet Yılmaz',
    date: '2024-02-20',
    amount: '₺350',
    status: 'completed',
    platform: 'Trendyol'
  },
  {
    id: '#ORD002',
    customer: 'Ayşe Demir',
    date: '2024-02-20',
    amount: '₺520',
    status: 'processing',
    platform: 'Hepsiburada'
  },
  {
    id: '#ORD003',
    customer: 'Mehmet Kaya',
    date: '2024-02-19',
    amount: '₺180',
    status: 'pending',
    platform: 'N11'
  },
  {
    id: '#ORD004',
    customer: 'Zeynep Şahin',
    date: '2024-02-19',
    amount: '₺890',
    status: 'completed',
    platform: 'Trendyol'
  },
  {
    id: '#ORD005',
    customer: 'Ali Öztürk',
    date: '2024-02-18',
    amount: '₺240',
    status: 'cancelled',
    platform: 'Hepsiburada'
  }
]

const getStatusColor = (status: OrderData['status']) => {
  switch (status) {
    case 'completed':
      return 'success'
    case 'processing':
      return 'info'
    case 'pending':
      return 'warning'
    case 'cancelled':
      return 'error'
    default:
      return 'default'
  }
}

const getStatusText = (status: OrderData['status']) => {
  switch (status) {
    case 'completed':
      return 'Tamamlandı'
    case 'processing':
      return 'İşleniyor'
    case 'pending':
      return 'Beklemede'
    case 'cancelled':
      return 'İptal Edildi'
    default:
      return status
  }
}

const Orders = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ mb: 4 }}>
          Siparişler
        </Typography>
      </Grid>
      
      <Grid item xs={12}>
        <Card>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='orders table'>
              <TableHead>
                <TableRow>
                  <TableCell>Sipariş No</TableCell>
                  <TableCell>Müşteri</TableCell>
                  <TableCell>Tarih</TableCell>
                  <TableCell>Tutar</TableCell>
                  <TableCell>Platform</TableCell>
                  <TableCell>Durum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {order.id}
                    </TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.platform}</TableCell>
                    <TableCell>
                      <Chip
                        label={getStatusText(order.status)}
                        color={getStatusColor(order.status)}
                        size='small'
                      />
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

export default Orders 