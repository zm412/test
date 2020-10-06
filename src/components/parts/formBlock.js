
let React = require('react');
let ButtSubmit = require('./buttSubmit');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class FormBlock extends React.Component{

  constructor(props){
    super(props);
  }
  
  render(){


     
//
//    let nameEl,idEl,valueEl, typeEl, classInp, inputProps;
//
//    let listInps = outInfo[4].map((item, index) => (
//        
//      [nameEl, idEl, valueEl, typeEl, classInp] = item,
//      inputProps = { id:"outlined-size-normal" , label:nameEl, value: valueEl, onChange: outInfo[5], variant: 'outlined' },
//
//      <TextField key={index} inputProps={inputProps} label={item[1]} onFocus={outInfo[6] ? outInfo[7]: ()=>{}} cleanFocus={outInfo[6]} funcFocus={outInfo[7]} /> )
//    );
//
    let outInfo = this.props.formInformation;
    let listButts = <div>
            <ButtSubmit nameOfButton={'login'}  func={outInfo[1]} inviting={outInfo[3] ? false : true} />
            <ButtSubmit nameOfButton={'register'} func={outInfo[2]} inviting={outInfo[3] ? true : false}/>
                    </div>
    
    return(
      <form action="" method="post">


    <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <TextField label="Name" id="name" defaultValue="name" variant="outlined" />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField label="Email" id="email" defaultValue="email" variant="outlined" />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField label="Phone number" id="phone" defaultValue="phone" variant="outlined" />
        </Grid>
    </Grid>
      <div>
               </div>
      </form>
    )
  }
}




module.exports = FormBlock;






