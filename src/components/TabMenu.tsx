// ** MUI Imports
import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Pagination from '@mui/material/Pagination'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import TrendingDown from 'mdi-material-ui/TrendingDown'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`marketplace-tabpanel-${index}`}
      aria-labelledby={`marketplace-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

// Örnek sipariş verileri
const orderData = [
  {
    id: '#2453',
    customer: 'Ahmet Yılmaz',
    product: 'iPhone 13 Pro',
    date: '2023-10-15',
    amount: '24.999 TL',
    status: 'Tamamlandı'
  },
  {
    id: '#2454',
    customer: 'Ayşe Demir',
    product: 'Samsung TV',
    date: '2023-10-15',
    amount: '12.499 TL',
    status: 'İşlemde'
  },
  {
    id: '#2455',
    customer: 'Mehmet Kaya',
    product: 'Laptop Dell',
    date: '2023-10-14',
    amount: '18.999 TL',
    status: 'Tamamlandı'
  }
]

// Örnek ürün verileri
const productData = [
  {
    id: 'PRD001',
    name: 'iPhone 13 Pro',
    stock: 25,
    price: '24.999 TL',
    category: 'Elektronik',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 'PRD002',
    name: 'Samsung TV',
    stock: 12,
    price: '12.499 TL',
    category: 'Elektronik',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 'PRD003',
    name: 'Laptop Dell',
    stock: 8,
    price: '18.999 TL',
    category: 'Bilgisayar',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 'PRD004',
    name: 'Apple Watch',
    stock: 15,
    price: '7.999 TL',
    category: 'Aksesuarlar',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 'PRD005',
    name: 'Sony PlayStation 5',
    stock: 5,
    price: '16.999 TL',
    category: 'Oyun Konsolları',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 'PRD006',
    name: 'MacBook Pro',
    stock: 10,
    price: '42.999 TL',
    category: 'Bilgisayar',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 'PRD007',
    name: 'AirPods Pro',
    stock: 30,
    price: '4.999 TL',
    category: 'Aksesuarlar',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 'PRD008',
    name: 'iPad Air',
    stock: 20,
    price: '13.999 TL',
    category: 'Tablet',
    image: 'https://via.placeholder.com/300x200'
  }
]

// Örnek rapor verileri
const reportData = [
  {
    title: 'Toplam Satış',
    value: '156.789 TL',
    change: '+12%',
    trend: 'up'
  },
  {
    title: 'Toplam Sipariş',
    value: '1,234',
    change: '+8%',
    trend: 'up'
  },
  {
    title: 'İade Oranı',
    value: '%2.5',
    change: '-1%',
    trend: 'down'
  },
  {
    title: 'Ortalama Sipariş Değeri',
    value: '857 TL',
    change: '+5%',
    trend: 'up'
  }
]

const TabMenu = () => {
  const [value, setValue] = useState(0)
  const [page, setPage] = useState(1)
  const productsPerPage = 4
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  // Calculate the products to show on current page
  const indexOfLastProduct = page * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct)
  const pageCount = Math.ceil(productData.length / productsPerPage)

  return (
    <Card>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="marketplace tabs">
            <Tab label="Siparişler" />
            <Tab label="Ürünler" />
            <Tab label="Raporlar" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sipariş No</TableCell>
                  <TableCell>Müşteri</TableCell>
                  <TableCell>Ürün</TableCell>
                  <TableCell>Tarih</TableCell>
                  <TableCell>Tutar</TableCell>
                  <TableCell>Durum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderData.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.customer}</TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      <Chip 
                        label={row.status} 
                        color={row.status === 'Tamamlandı' ? 'success' : 'warning'}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={6}>
            {currentProducts.map(product => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {product.category}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Stok: {product.stock}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Pagination 
              count={pageCount} 
              page={page} 
              onChange={handlePageChange} 
              color="primary"
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={4}>
            {reportData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ p: 4 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                      {item.value}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: item.trend === 'up' ? 'success.main' : 'error.main',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {item.trend === 'up' ? <TrendingUp sx={{ mr: 0.5 }} /> : <TrendingDown sx={{ mr: 0.5 }} />}
                        {item.change}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Box>
    </Card>
  )
}

export default TabMenu 