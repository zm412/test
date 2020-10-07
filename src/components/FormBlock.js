
let React = require('react');
//let ButtSubmit = require('./buttSubmit');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreateGrid from './CreateGrid';
import Block4 from './Block4';
import ButtonSave from './ButtonSave';


class FormBlock extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
      phoneNumber: ''
    }
    this.funcOnChange = this.funcOnChange.bind(this)
  }
 
  funcOnChange(e){
    e.preventDefault();
    let key = e.target.id;
    let value = e.target.value;
    this.setState((state) => {
      return {[key] : value}
    })
  }
 


  render(){

    
    let inputProps = this.props.collection; 
    let list = this.props.collection.idArr.map((item, index) => 
      <CreateGrid idEl={item} key={index} funcOnChange={this.funcOnChange} inputProps={inputProps} />
)
    let button = inputProps.regimRedact ?  <ButtonSave /> : '';
    return(
      <form action="" method="post">
          <Grid container spacing={4}>
            {list}
            {button}
            {console.log(list)}
         </Grid>
      {console.log(this.state.name, this.state.email, this.state.phoneNumber)}

      </form>
    )
  }
}




module.exports = FormBlock;






