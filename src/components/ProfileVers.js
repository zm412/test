let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Block3 from './Block3';
import FormBlock from './FormBlock';


class ProfileVers extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name:'Сидорова Наталья Ивановна',
      email: 'sydorova@mail.ru',
      phoneNumber: '+94654316354321',
      buttonsName: 'Редактировать',
      regimRedact: false,
    }

    this.funcOnChange = this.funcOnChange.bind(this);
    this.clickForRedactProfile = this.clickForRedactProfile.bind(this);

  }
  
  clickForRedactProfile(e){
    e.preventDefault();
    this.setState({regimRedact: !this.state.regimRedact});
    this.setState(state => {
      if(state.buttonsName == 'Редактировать'){
        return{ buttonsName:'Закрыть Х'}
      }else{
        return{ buttonsName:'Редактировать'}
      }
    });
  }
  

  funcOnChange(e){
    e.preventDefault();
    let key = e.target.id;
    let value = e.target.value;
    this.setState((state) => {
      return {[key] : value}
    })
  }
 
  changeRegim(e){
    e.preventDefault();
    this.setState({regimRedact: !this.state.regimRedact});
  }

 
  
  render(){
    let idArr = ['email', 'phoneNumber'];

    if(this.state.regimRedact){
      idArr.unshift('name');
    }

    let data = {
      name: {
        meaning: this.state.name,
        label: "Имя и фамилия",
      },
      email: {
        meaning: this.state.email,
        label: "Email"
      },
      phoneNumber:{
        meaning: this.state.phoneNumber,
        label: "Номер телефона"
      }
      }

    let propsForForm = {data: data,  idArr: idArr, funcForOnChange: this.funcOnChange, regimRedact: this.state.regimRedact};
    
    return(
      <div>     
  
    <Grid container spacing={4}>
      <Grid item xs={12}> <Block3 fullName={this.state.Name} forClick={this.clickForRedactProfile} buttonsName={this.state.buttonsName} /></Grid>
    </Grid>   

    <Grid container spacing={4}>
      {console.log(this.state.regimRedact)}
        <Grid item xs={12}> <FormBlock  collection={propsForForm}/> </Grid>
    </Grid>
      </div>
   )
  }
}




module.exports = ProfileVers;






