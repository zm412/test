let React = require('react');
let InpText = require('./parts/inpText');
let ButtSubmit = require('./parts/buttSubmit');
//let FormBlock = require('./formBlock');

class Auth extends React.Component{
  constructor(){
    super();
    this.state = {
      regimLogin: true,
      login:'',
      password: '',
      passwordConfirm: '',
      loginStyle: 'form-control',
      passwordStyle: 'form-control',
      passwordConfirmStyle: 'form-control',
      messageOnTheWall:'',
      styleForMessageOnTheWall:'',
      cleanFocus: false
     },

    this.changeRegim = this.changeRegim.bind(this);
    this.funcOnChange = this.funcOnChange.bind(this);
    this.functionForLogin = this.functionForLogin.bind(this);
    this.functionForRegister = this.functionForRegister.bind(this);
    this.clearFocus = this.clearFocus.bind(this);
  }

  chooseStyle(obj){
    let target = obj.data;
    let keysOfStates = ['login', 'password', 'passwordConfirm'];
    if(target === '') return;
      if(target.ok === true){
        keysOfStates.map(item => this.setState({[item+'Style']:'form-control border-success' }));
        this.setState({
          messageOnTheWall: 'You are in!!!', 
          styleForMessageOnTheWall: 'border-success bg-success'
        });
        this.clearFocus();
      }else if(target.ok === false){
        keysOfStates.map(item => target.fields.includes(item) ? this.setState({[item+'Style']:'form-control border-danger' }) : this.setState({[item + 'Style']: 'form-control'}));
        this.setState({
          messageOnTheWall: target.error, 
          styleForMessageOnTheWall: 'border-danger bg-warning'
        });
      }
  }

  addingErrorP(obj){
    
  }


  funcOnChange(e){
    e.preventDefault();
    let key = e.target.id;
    let value = e.target.value;
    this.setState((state) => {
      return {[key] : value}
    })
  }
  
  



  clearFocus(){
    let baseStyle = 'form-control';
    this.setState({ loginStyle: baseStyle, passwordStyle: baseStyle, passwordConfirmStyle: baseStyle, login: '', password: '', passwordConfirm: '', messageOnTheWall:''});
    this.setState({cleanFocus: false})
  }

  functionForLogin(e){
    e.preventDefault();
    let loginState = {
      login: this.state.login,
      password: this.state.password
    }
  }
 
  functionForRegister(e){
    e.preventDefault();
    let loginState = {
      login: this.state.login,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    }
  }

  changeRegim(e){
    e.preventDefault();
    this.setState({regimLogin: !this.state.regimLogin});
    this.clearFocus();
  }



  render(){

    let nameForm, funcLoginButt, funcRegisterButt, namesOfEl;
    

        if(!this.state.regimRedact){

          funcRegisterButt = this.changeRegim;
          namesOfEl = [
            ['Login', 'login', this.state.login, 'text',  this.state.loginStyle], 
            ['Password', 'password', this.state.password, 'password', this.state.passwordStyle]
          ];

        }else{
          nameForm = 'Register';
          funcLoginButt = this.changeRegim;
          funcRegisterButt = this.functionForRegister;
          namesOfEl = [
            ['Login', 'login' , this.state.login, 'text',  this.state.loginStyle ], 
            ['Password', 'password', this.state.password, 'password', this.state.passwordStyle],
            ['Password-confirm', 'passwordConfirm', this.state.passwordConfirm, 'password', this.state.passwordConfirmStyle]
          ];
        }
    
    let arrayOfArgs = [nameForm, funcLoginButt, funcRegisterButt,this.state.regimLogin, namesOfEl, this.funcOnChange, this.state.cleanFocus, this.clearFocus];

     
          return(
            <div>
              <p className={this.state.styleForMessageOnTheWall}>{this.state.messageOnTheWall}</p>
                <FormBlock  formInformation={arrayOfArgs} />
            </div>
)
          
        }
}


module.exports = Auth;
