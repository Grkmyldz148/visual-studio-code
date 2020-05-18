import React from 'react';
import injectShet from 'react-jss';
import { withRouter } from 'react-router-dom';
import style from './stylesheet.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const NoStyledMusicComponent = ({ classes, img, title, url }) => {
    return <div className={classes.container}>
        <div className={classes.musicFrame}>
            <a href={url}>
                <div className={classes.icoFrame}>
                    <FontAwesomeIcon className={classes.socialIco} icon={faMusic} size="lg" />
                </div>

                <div className={classes.titleFrame}>{title}</div>
            </a>
        </div>
    </div>
}
const MusicComponent = injectShet(style)(NoStyledMusicComponent);
export default withRouter(MusicComponent);