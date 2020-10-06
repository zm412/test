
import Header from '../src/components/Header';
import Block2 from '../src/components/Block2';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AuthInfo from '../src/components/Auth';
import Button from '@material-ui/core/Button';



export default function Home(){
  return <div>
    <Header />
    <Grid container spacing={4}>
      <Grid item xs={12}></Grid>
    </Grid>  

    <Grid container spacing={4}>
      <Grid item xs={12}> <Block2 /></Grid>
    </Grid>  

    </div>
}


