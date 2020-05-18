import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import Welcome from '../../../../childComponents/welcome'
import SoftwareComponent from '../../../../childComponents/software'
const NoStyledSoftware = ({classes}) => {
  return <div className={classes.container}>
    <div className={classes.background}>
         <Welcome  
         title="Yazılım"
         img=""
         content="Merhaba, bu bölümün biraz değişik olması lazımdı çünkü burası benim en önem verdiğim kategorim."
         titleFontSize="40px"
         fontSize="20px"
         width="600px"
         height="300px"/>
    </div>
  </div>
}
const Software = injectShet(style)(NoStyledSoftware);
export default Software;