import React from 'react';
import injectShet from 'react-jss';
import { withRouter } from 'react-router-dom';
import style from './stylesheet.js';

const NoStyledCategorys = ({ history, classes, title, content, img, url, linkTitle }) => {
    return <div className={classes.container}>
  
        <div className={classes.Column}>
            <div className={classes.paragraph}>
                <div className={classes.title}> deneme</div>
                <div className={classes.content}> Grafik</div>
                <div className={classes.link} onClick={()=> history.push(url)}>
                  
                </div>
            </div>
        </div>
    </div>
}
const Categorys = injectShet(style)(NoStyledCategorys);
export default withRouter(Categorys);