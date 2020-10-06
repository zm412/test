import TextField from '@material-ui/core/TextField';
import React from 'react';

export class InpText extends React.Component{

  constructor(props){
    super(props);
    }

  render(){
    const [nameEl, idEl, valueEl, typeEl, classInp, cleanFocus, onFocusfunc] = this.props.nameOfEl;

    const inputProps = { id: idEl, label:idEl, value: valueEl, onChange: this.props.func, variant: 'outlined' };

     
    return (
      <TextField inputProps={inputProps} onFocus={this.porps.cleanFocus ? this.props.funcFocus: ()=>{}}
          variant="outlined"
        />

    );
  }
}





