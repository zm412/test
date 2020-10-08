
import Header from '../src/components/Header';
import ProfileVers from '../src/components/ProfileVers';
import Block3 from '../src/components/Block3';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';



export default function Profile(){
  return(<div>
    <Header />
    <ProfileVers />  
    </div>
  )

}

