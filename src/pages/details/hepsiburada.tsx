// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Import
import BackButton from 'src/components/BackButton'
import TabMenu from 'src/components/TabMenu'

const HepsiburadaDetails = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <BackButton />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Hepsiburada
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TabMenu />
      </Grid>
    </Grid>
  )
}

export default HepsiburadaDetails 