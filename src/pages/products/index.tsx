// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'

// ** Types
interface ProductData {
  id: string
  name: string
  image: string
  price: string
  stock: number
  category: string
  platforms: string[]
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4]
  }
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  objectFit: 'contain',
  backgroundColor: theme.palette.background.default
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}))

const StyledPlatformBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: 'auto',
  paddingTop: theme.spacing(2)
}))

const products: ProductData[] = [
  {
    id: 'PRD001',
    name: 'Akıllı Saat Pro X',
    image: 'https://placehold.co/400x200/e6e6e6/666666.png?text=Akıllı+Saat+Pro+X',
    price: '₺2,499',
    stock: 45,
    category: 'Elektronik',
    platforms: ['Trendyol', 'Hepsiburada']
  },
  {
    id: 'PRD002',
    name: 'Kablosuz Kulaklık Z1',
    image: 'https://placehold.co/400x200/e6e6e6/666666.png?text=Kablosuz+Kulaklık+Z1',
    price: '₺1,299',
    stock: 32,
    category: 'Elektronik',
    platforms: ['Trendyol', 'N11', 'Hepsiburada']
  },
  {
    id: 'PRD003',
    name: 'Ultra HD Kamera',
    image: 'https://placehold.co/400x200/e6e6e6/666666.png?text=Ultra+HD+Kamera',
    price: '₺3,999',
    stock: 12,
    category: 'Elektronik',
    platforms: ['Hepsiburada']
  },
  {
    id: 'PRD004',
    name: 'Taşınabilir Şarj',
    image: 'https://placehold.co/400x200/e6e6e6/666666.png?text=Taşınabilir+Şarj',
    price: '₺499',
    stock: 78,
    category: 'Elektronik',
    platforms: ['Trendyol', 'N11']
  },
  {
    id: 'PRD005',
    name: 'Bluetooth Hoparlör',
    image: 'https://placehold.co/400x200/e6e6e6/666666.png?text=Bluetooth+Hoparlör',
    price: '₺899',
    stock: 25,
    category: 'Elektronik',
    platforms: ['N11', 'Hepsiburada']
  },
  {
    id: 'PRD006',
    name: 'Akıllı Bileklik',
    image: 'https://placehold.co/400x200/e6e6e6/666666.png?text=Akıllı+Bileklik',
    price: '₺799',
    stock: 54,
    category: 'Elektronik',
    platforms: ['Trendyol', 'Hepsiburada']
  }
]

const Products = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ mb: 4 }}>
          Ürünler
        </Typography>
      </Grid>

      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <StyledCard>
            <Box sx={{ p: 3, pb: 0 }}>
              <StyledCardMedia
                component='img'
                image={product.image}
                alt={product.name}
              />
            </Box>
            <StyledCardContent>
              <Box>
                <Typography gutterBottom variant='h6' component='div' sx={{ fontWeight: 600 }}>
                  {product.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.category}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6' color='primary' sx={{ fontWeight: 600 }}>
                  {product.price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='body2' color='text.secondary' sx={{ mr: 1 }}>
                    Stok:
                  </Typography>
                  <Chip 
                    label={product.stock}
                    color={product.stock > 20 ? 'success' : product.stock > 10 ? 'warning' : 'error'}
                    size='small'
                  />
                </Box>
              </Box>

              <StyledPlatformBox>
                {product.platforms.map((platform) => (
                  <Chip 
                    key={platform}
                    label={platform}
                    variant='outlined'
                    size='small'
                  />
                ))}
              </StyledPlatformBox>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  )
}

export default Products 