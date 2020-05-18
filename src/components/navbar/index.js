import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter,faYoutube,faSpotify } from '@fortawesome/free-brands-svg-icons';


const NoStyledNavbar = ({ history, classes }) => {
   return (
      <div className={classes.navbar}>
         <div className={classes.navbarGradient}>
            <div className={classes.navbarTxt}>
               <FontAwesomeIcon className={classes.headerImg} icon={faGhost}  />
               <li onClick={() => history.push("/")}>
                  Ana Sayfa
               </li>
               <li onClick={() => history.push("/calismalarim")}>
               Çalışmalarım
               </li>
               <li onClick={() => history.push("/hakkımda")}>
                  Hakkımda
               </li>
                 <li onClick={() => history.push("/deneme")}>
                  Deneme
               </li>
            </div>
            <div className={classes.socialIcos}>
              <a href="https://www.instagram.com/gorkem.371"><FontAwesomeIcon className={classes.socialIco} icon={faInstagram} size="lg" /></a> 
              <a href="https://www.instagram.com/onudaoldurun"><FontAwesomeIcon className={classes.socialIco} icon={faTwitter} size="lg" /></a> 
              <a href="https://www.instagram.com/onudaoldurun"><FontAwesomeIcon className={classes.socialIco} icon={faYoutube} size="lg" /></a> 
              <a href="https://www.instagram.com/onudaoldurun"><FontAwesomeIcon className={classes.socialIco} icon={faSpotify} size="lg" /></a>
            </div>
         </div>
      </div>
   );
}
const Navbar = injectShet(style)(NoStyledNavbar);
export default withRouter(Navbar);