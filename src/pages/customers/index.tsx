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
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

// ** Types
interface CustomerData {
  id: string
  name: string
  email: string
  phone: string
  totalOrders: number
  totalSpent: string
  lastOrder: string
  status: 'active' | 'inactive'
}

const customers: CustomerData[] = [
  {
    id: 'CUS001',
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@email.com',
    phone: '0532 123 4567',
    totalOrders: 15,
    totalSpent: '₺12,450',
    lastOrder: '2024-02-20',
    status: 'active'
  },
  {
    id: 'CUS002',
    name: 'Ayşe Demir',
    email: 'ayse.demir@email.com',
    phone: '0533 234 5678',
    totalOrders: 8,
    totalSpent: '₺5,890',
    lastOrder: '2024-02-18',
    status: 'active'
  },
  {
    id: 'CUS003',
    name: 'Mehmet Kaya',
    email: 'mehmet.kaya@email.com',
    phone: '0535 345 6789',
    totalOrders: 3,
    totalSpent: '₺2,340',
    lastOrder: '2024-02-15',
    status: 'inactive'
  },
  {
    id: 'CUS004',
    name: 'Zeynep Şahin',
    email: 'zeynep.sahin@email.com',
    phone: '0536 456 7890',
    totalOrders: 12,
    totalSpent: '₺9,780',
    lastOrder: '2024-02-19',
    status: 'active'
  },
  {
    id: 'CUS005',
    name: 'Ali Öztürk',
    email: 'ali.ozturk@email.com',
    phone: '0537 567 8901',
    totalOrders: 6,
    totalSpent: '₺4,560',
    lastOrder: '2024-02-17',
    status: 'active'
  }
]

const Customers = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ mb: 4 }}>
          Müşteriler
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='customers table'>
              <TableHead>
                <TableRow>
                  <TableCell>Müşteri</TableCell>
                  <TableCell>İletişim</TableCell>
                  <TableCell align='right'>Toplam Sipariş</TableCell>
                  <TableCell align='right'>Toplam Harcama</TableCell>
                  <TableCell>Son Sipariş</TableCell>
                  <TableCell>Durum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow
                    key={customer.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2 }}>{customer.name.charAt(0)}</Avatar>
                        <Box>
                          <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>
                            {customer.name}
                          </Typography>
                          <Typography variant='caption'>{customer.id}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body2'>{customer.email}</Typography>
                      <Typography variant='caption'>{customer.phone}</Typography>
                    </TableCell>
                    <TableCell align='right'>{customer.totalOrders}</TableCell>
                    <TableCell align='right'>{customer.totalSpent}</TableCell>
                    <TableCell>{customer.lastOrder}</TableCell>
                    <TableCell>
                      <Chip
                        label={customer.status === 'active' ? 'Aktif' : 'Pasif'}
                        color={customer.status === 'active' ? 'success' : 'default'}
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

export default Customers 