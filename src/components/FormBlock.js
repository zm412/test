
let React = require('react');
//let ButtSubmit = require('./buttSubmit');
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CreateGrid from './CreateGrid';
import Block4 from './Block4';


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
 //   let outInfo = this.props.formInformation;
 //   let listButts = <div>
 //           <ButtSubmit nameOfButton={'login'}  func={outInfo[1]} inviting={outInfo[3] ? false : true} />
 //           <ButtSubmit nameOfButton={'register'} func={outInfo[2]} inviting={outInfo[3] ? true : false}/>
 //                   </div>
    
    let inputProps = this.props.collection; 
    let list = this.props.collection.idArr.map((item, index) => 
      <CreateGrid idEl={item} key={index} inputProps={inputProps} />
)
    return(
      <form action="" method="post">
          <Grid container spacing={4}>
            {list}
            <Block4 onClick={inputProps.funcForOnChane} />
          </Grid>
      {console.log(inputProps.data.name.meaning, inputProps.data.email.meaning)}

      </form>
    )
  }
}




module.exports = FormBlock;






