import React from 'react';
import FormContent from './FormContent';
 class FormModal extends React.Component{
     render(){
         const formContent=<FormContent></FormContent>
         const modal = this.props.showModal ? <div>{formContent}</div> :null;
         return(
             <div>
                 {modal}
             </div>
         );
     }
 }
 export default FormModal;