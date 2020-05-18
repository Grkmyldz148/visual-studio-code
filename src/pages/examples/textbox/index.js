import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import { withRouter } from 'react-router-dom';
const iconMargin = {
   marginRight: "8px"
}
const NoStyledTextBox = ({ size, icon, type, disable, className, classes, ...props }) => {
   return <input
      {...props}
      className={
         [
            classes.button,
            (
               classes[size]
            ),
            classes[type],
            (
               disable ? "disable" : null
            ),
            className
         ].join(" ")
      }
      disabled={disable ? "disabled" : null}
   >   
   </input>



}
const TextBox = injectShet(style)(NoStyledTextBox);
export default withRouter(TextBox);