
import Header from '../src/components/Header';
import Block3 from '../src/components/Block3';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AuthInfo from '../src/components/Auth';
import Button from '@material-ui/core/Button';



export default function Profile(){
  return <div>
    <Header />
     
    <Grid container spacing={4}>
      <Grid item xs={12}> <Block3 /></Grid>
    </Grid>  

    <Grid container spacing={4}>
        <Grid item xs={12}> <AuthInfo /> </Grid>
    </Grid>
    <Grid container spacing={4}>
        <Grid item xs={12}> <Button variant="contained" color="primary" > Theme Provider </Button> </Grid>
    </Grid>

    </div>
}

