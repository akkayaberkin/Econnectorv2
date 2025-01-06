// ** MUI Imports
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'

const BackButton = () => {
  const router = useRouter()

  return (
    <Button
      variant="contained"
      onClick={() => router.back()}
      startIcon={<ArrowLeft />}
      sx={{ mb: 4 }}
    >
      Back
    </Button>
  )
}

export default BackButton 