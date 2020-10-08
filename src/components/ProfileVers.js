let React = require('react');
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Block3 from './Block3';
import Block1 from './Block1';
import FormBlock from './FormBlock';
import axios from 'axios';


class ProfileVers extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name:'Сидорова Наталья Ивановна',
      email: 'sydorova@mail.ru',
      phoneNumber: '++7 989 090 78 90',
      nameTemp:'Сидорова Наталья Ивановна',
      emailTemp: 'sydorova@mail.ru',
      phoneNumberTemp: '+7 989 090 78 90',
      regimRedact: false,
      nameValidErr:false, 
      phoneNumberValidErr: false 
    }
    
    this.clickForRedactProfile = this.clickForRedactProfile.bind(this);
    this.checkFieldValidation = this.checkFieldValidation.bind(this);
    this.changeRegim = this.changeRegim.bind(this);
    this.funcOnChange = this.funcOnChange.bind(this);
    this.currentValue = this.currentValue.bind(this);
    this.funcSendInfo = this.funcSendInfo.bind(this);
  }

  currentValue(){
    this.setState({
      name: this.state.nameTemp,
      email: this.state.emailTemp,
      phoneNumber: this.state.phoneNumberTemp
    })
    
  }
  
  funcOnChange(e){
    e.preventDefault();
    let key = e.target.id + 'Temp';
    
    let value = e.target.value;
    this.checkFieldValidation(e.target.id);
    this.setState((state) => {
      return {[key] : value}
    })
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

  
  funcSendInfo(){
    let store = [ this.state.nameStore, this.state.phoneNumberStore, this.state.phoneNumberStore ];

    let data = {
      name : this.state.name,
      email : this.state.email,
      phoneNumber : this.state.phoneNumber,
    }

    let config = {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `dljhlsdkjflsjdf`
      },
      withCredentials: true,
      body: JSON.stringify(data)
    };

    axios.post('http://jsonplaceholder.typicode.com/posts',data,  config)
          .then(json => localStorage.setItem('store', JSON.stringify(json)))

    let answ = JSON.parse(localStorage.getItem('store'));
    console.log(answ);
  
  }


  changeRegim(e){
    e.preventDefault();
    this.setState({regimRedact: !this.state.regimRedact});
  }

  checkFieldValidation(key){
    let nameExp = /^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/;
    let phoneExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
   let checkKey = key+'Temp';
    let str = this.state[checkKey];
    let validErr = key + 'ValidErr'

    console.log(str)
    if(!nameExp.test(str) && !phoneExp.test(str)){
      this.setState({[validErr]: true});
    }else{
      this.setState({[validErr]: false});
    }
  }
  
  render(){
    let idArr = ['email', 'phoneNumber'];

    if(this.state.regimRedact){
      idArr.unshift('name');
    }

    let data = {
      name: {
        meaning: this.state.name,
        temp: this.state.nameTemp,
        label: "Имя и фамилия",
        isError: this.state.nameValidErr,
        messageErr: 'Вы неверно указали имя'
      },
      email: {
        meaning: this.state.email,
        temp: this.state.emailTemp,
        label: "Email",
        isError: false
      },
      phoneNumber:{
        meaning: this.state.phoneNumber,
        temp: this.state.phoneNumberTemp,
        label: "Номер телефона",
        isError: this.state.phoneNumberValidErr,
        messageErr: 'Вы неверно указали номер телефона'
      }
      }

    let propsForForm = {data: data,  idArr: idArr, regimRedact: this.state.regimRedact, changeRegim: this.changeRegim, funcOnChange: this.funcOnChange, currentValue: this.currentValue, funcSendInfo: this.funcSendInfo};
    
    return(
    <div>     
      {console.log(this.state.name, this.state.email, this.state.phoneNumber)}
      <Block1  chapter= {data.email.meaning} />
      <Block3 fullName={this.state.name} forClick={this.clickForRedactProfile} buttonsName={this.state.regimRedact ? 'Закрыть Х': 'Редактировать'}  />
       <FormBlock  collection={propsForForm} />
      {console.log(this.state.name, this.state.email, this.state.phoneNumber)}
      {console.log(this.state.nameTemp, this.state.emailTemp, this.state.phoneNumberTemp)}
    </div>
   )
  }
}




module.exports = ProfileVers;






