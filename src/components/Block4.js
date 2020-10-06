
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class Block4 extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){



    
    return(

    <Grid container spacing={4}>
        <Grid item xs={12}>
      <Button variant="contained" onClick={this.props.forClick} color="primary">Сохранить</Button>
        </Grid>
   </Grid>
    )
  }
}




module.exports = Block4;






