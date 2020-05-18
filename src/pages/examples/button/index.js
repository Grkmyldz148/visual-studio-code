import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import { withRouter } from 'react-router-dom';
const iconMargin = {
   marginRight: "8px"
}
const NoStyledButton = ({ size, type, value, disable, className, classes, ...props }) => {
   return <button
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
      disabled = {disable ? "disabled" : null}
   >
      {value}
   </button>
}
const Button = injectShet(style)(NoStyledButton);
export default withRouter(Button);