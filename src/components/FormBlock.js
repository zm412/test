
let React = require('react');
//let ButtSubmit = require('./buttSubmit');
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
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
      nameStore:'',
      emailStore: '',
      phoneNumberStore: '',
      updateData: false
    }
    this.funcOnChange = this.funcOnChange.bind(this)
  }
 
  funcOnChange(e){
    e.preventDefault();
    let key = e.target.id+'Store';
    let value = e.target.value;
    this.setState((state) => {
      return {[key] : value}
    })
  }

  updateDataFunc(){
    this.setState({updateData: true})
    this.props.saveButton(this.state.nameStore, this.state.emailStore, this.state.phoneNumberStore);
    this.funcSendInfo();
  }

  funcSendInfo(){
    let loginState = {
      name: this.state.name,
      email: this.state.phoneNumberStore,
      phoneNumber: this.state.phoneNumberStore
    }
    console.log(loginState)
    axios.post('http://jsonplaceholder.typicode.com/posts', loginState)
    .then(json => console.log(json))
  }
 
  functionForRegister(e){
    e.preventDefault();
    let loginState = {
      login: this.state.login,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    }
    console.log(loginState)
    axios.post('/api/auth/register', loginState)
      .then(res => {
        this.chooseStyle(res);
        if(res.data.ok === false){
          this.setState({cleanFocus: true});
        }
          console.log(res)
      })

  }


 


  render(){

    
    let inputProps = this.props.collection; 
    let list = this.props.collection.idArr.map((item, index) => 
      <CreateGrid idEl={item} key={index} funcOnChange={this.funcOnChange} inputProps={inputProps} />
)
    let button = inputProps.regimRedact ?  <ButtonSave needsUpdate={this.updateDataFunc.bind(this)} /> : '';
    return(
      <form action="" method="post" >
          <Grid container spacing={4}>
            {list}
            {button}
         </Grid>

      </form>
    )
  }
}




module.exports = FormBlock;






