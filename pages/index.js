
import Header from '../src/components/Header';
import Block1 from '../src/components/Block1';
import Block2 from '../src/components/Block2';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AuthInfo from '../src/components/Auth';
import Button from '@material-ui/core/Button';
import Router from 'next/router';



export default function Home(){
  const onClickFunc = (e) => {
    
  }

  return <div>
    <Header />
      <Block1  chapter="Личный профиль" />
      <Block2 />

    </div>
}


