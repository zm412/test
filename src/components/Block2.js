
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'


class Block2 extends React.Component{

  constructor(props){
    super(props);
  }
  
  handleClick(){

  }
  
  render(){
    
    return(
      <div>
    <Grid container spacing={4}>
        <Grid item xs={4}> ЛИЧНЫЙ ПРОФИЛЬ </Grid>
        <Grid item xs={7}></Grid>
    </Grid>
      
    <Grid container spacing={4}>
        <Grid item xs={6}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={this.handleClick}>
                  Главная
                </Link>
                <Link
                  color="textPrimary"
                  href="/profile"
                  onClick={this.handleClick}
                  aria-current="page"
                >
                 Личный профиль 
                </Link>
              </Breadcrumbs>
        </Grid>
   </Grid>
      </div>
    )
  }
}




module.exports = Block2;






