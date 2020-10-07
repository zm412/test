let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Block3 from './Block3';
import Block1 from './Block1';
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
  
  clearFocus(e){
    e.preventDefault();
    e.target.value = '';
  }


  saveButton(nameValue, emailValue, phoneValue){
    return function(e){
      e.preventDefault();
      this.setState({name: nameValue,
                    email: emailValue,
                    phoneNumber: phoneValue})
    console.log(this.state.name, this.state.email, this.state.phoneNumber)
    } 
  }
 
  changeRegim(e){
    e.preventDefault();
    this.setState({regimRedact: !this.state.regimRedact});
  }

  checkFieldValidation(key){
    let nameExp = /^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/;
    let phoneExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let str = this.state[key];

    if(!nameExp.test(str) || !phoneExpt.test(str)){
      console.log('false');
      return false;
    }else{
      console.log('true');
      return true;
    }
  }

checkFieldsPhone(str){
    let phone = this.state.phoneNumber;
    let nameExp = /^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/;
    return nameExp.test(name);
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
        isError: () => {this.chekFieldValidation('name')}
      },
      email: {
        meaning: this.state.email,
        label: "Email",
        isError: false
      },
      phoneNumber:{
        meaning: this.state.phoneNumber,
        label: "Номер телефона",
        isError: () => {this.chekFieldValidation('phoneNumber')}
      }
      }

    let propsForForm = {data: data,  idArr: idArr, regimRedact: this.state.regimRedact};
    
    return(
    <div>     
      {console.log(this.state.name, this.state.email, this.state.phoneNumber)}
      <Block1  chapter= {data.email.meaning} />
      <Block3 fullName={this.state.name} forClick={this.clickForRedactProfile} buttonsName={this.state.buttonsName}  />
       <FormBlock  collection={propsForForm} saveButton={this.saveButton.bind(this)}/>
      {console.log(this.state.name, this.state.email, this.state.phoneNumber)}
    </div>
   )
  }
}




module.exports = ProfileVers;






