
let React = require('react');
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class Header extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){



    
    return( <div>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          Picture
        </Grid>

        <Grid item xs={2}>
            <Button href="#text-buttons" color="primary"> Войти </Button>
        </Grid>
   </Grid>
      </div>
    )
  }
}




module.exports = Header;




