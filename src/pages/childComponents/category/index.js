import React from 'react';
import injectShet from 'react-jss';
import { withRouter } from 'react-router-dom';
import style from './stylesheet.js';

const NoStyledCategory = ({ history, classes, title, content, url, linkTitle }) => {
    return <div className={classes.container}>
  
        <div className={classes.Column}>
            <div className={classes.paragraph}>
                <div className={classes.title}>{title}</div>
                <div className={classes.content}>{content}</div>
                <div className={classes.link} onClick={()=> history.push(url)}>
                    {linkTitle}
                </div>
            </div>
        </div>
    </div>
}
const Category = injectShet(style)(NoStyledCategory);
export default withRouter(Category);