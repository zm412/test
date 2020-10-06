
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Button from '@material-ui/core/Button';


class Block1 extends React.Component{

  constructor(props){
    super(props);
  }
  
  handleClick(){

  }
  
  render(){
    
    return( <div>
      <Grid container spacing={4}>
        <Grid item xs={8}> Picture </Grid>

        <Grid item xs={2}>
            <Button href="/profile" color="primary">{this.props.chapter}</Button>
        </Grid>
     </Grid>
 
      </div>

   )
  }
}




module.exports = Block1;






