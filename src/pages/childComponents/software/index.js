import React from 'react';
import injectShet from 'react-jss';
import { withRouter } from 'react-router-dom';
import style from './stylesheet.js';

const NoStyledSoftwareComponent = ({ history, classes, title, content, url, linkTitle }) => {
    return <div className={classes.container}>
  
        <div className={classes.Column}>
            <div className={classes.paragraph}>
                Yazılım
            </div>
        </div>
    </div>
}
const SoftwareComponent = injectShet(style)(NoStyledSoftwareComponent);
export default withRouter(SoftwareComponent);