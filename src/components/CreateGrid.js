
let React = require('react');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class CreateGrid extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){

    let {data, idArr, funcForOnChange, regimRedact  } = this.props.inputProps;
    let currentId = this.props.idEl;
    let defineProfile;
    let label = data[currentId].label;
    let meaning = data[currentId].meaning;

    if(regimRedact){
     return <Grid item xs={12} sm={3}>
          <TextField label={label} id={currentId} defaultValue={meaning} variant="outlined" disabled={currentId == "email" ? true : false} onChange={funcForOnChange} />
        </Grid>
        
      
    }else{
        return <Grid item xs={12}>,
                  <p> {meaning} </p>,
              </Grid>
    }
  }
}




module.exports = CreateGrid;






