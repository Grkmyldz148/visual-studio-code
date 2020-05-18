import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet.js';

const NoStyledWelcome = ({ history, classes, title, content, img }) => {
    return <div className={classes.container}>
        <div className={classes.paragraph}>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.content}>
                {content}
            </div>
        </div>
        <div className={classes.imageContainer}>
            <img className={classes.image} src={img} />
        </div>

    </div>
}
const Welcome = injectShet(style)(NoStyledWelcome);
export default Welcome;