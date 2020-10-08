
import Header from '../src/components/Header';
import Block1 from '../src/components/Block1';
import Block2 from '../src/components/Block2';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AuthInfo from '../src/components/Auth';
import Button from '@material-ui/core/Button';
import Router from 'next/router';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';



export default function Home(){
  const onClickFunc = (e) => {
    
  }

  return <div>
    <Header />
    <Grid container spacing={4}>
        <Grid item xs={4}>ГЛАВНАЯ</Grid>
        <Grid item xs={7}></Grid>
    </Grid>
      <Block1  chapter="Личный профиль" />
 
    <Grid container spacing={4}>
        <Grid item xs={6}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >
                  Главная
                </Link>
              </Breadcrumbs>
        </Grid>
   </Grid>


    </div>
}


