import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Prayer from './components/Prayer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MainContent() {
  const handleChange = (event) => {
    console.log(event.target.value); }
    return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <h2>Lorem</h2>
            <h3>Lorem</h3>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <h2>Lorem</h2>
            <h3>Lorem</h3>
          </div>
        </Grid>
      </Grid>
      <Divider style={{ borderColor: 'black', opacity: "0.2"}} />
      <Stack direction="row" justifyContent={"space-around"} style={{margin: "9px 0px 0px 0px"}}>
        <Prayer image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.m.wikimedia.org%2Fwiki%2FFile%3APRAYER.jpg&psig=AOvVaw2qRLltUBznUCwQEK-5lmcG&ust=1731011786845000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjUhMjHyIkDFQAAAAAdAAAAABAK" text="الفجر" time="4:10" />
        <Prayer image="" text="الظهر" time="11:32" />
        <Prayer image="" text="العصر" time="15:00" />
        <Prayer image="" text="المغرب" time="17:45" />
        <Prayer image="" text="العشاء" time="19:15" />
      </Stack>

      <Stack direction={"row"} justifyContent= {"center"} style={{margin: "10px"}}>
      <FormControl style={{width: "20%"}}>
        <InputLabel id="demo-simple-select-label">المدينة</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Stack>
    </>
  )
}