
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class Block3 extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){



    
    return(
    <Grid container spacing={4}>
        <Grid item xs={7}>
            Имя Фамилия Отчество
        </Grid>
        <Grid item xs={2}>
            <Button href="#text-buttons" color="primary"> Link </Button>
        </Grid>
   </Grid>
    )
  }
}




module.exports = Block3;






