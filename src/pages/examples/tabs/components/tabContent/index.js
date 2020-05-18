import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import { withRouter } from 'react-router-dom';

const NoStyledTabContent = ({ classes, data }) => {
   return <div className={classes.container}>
      {data.content}
   </div>
}
const TabContent = injectShet(style)(NoStyledTabContent);
export default withRouter(TabContent);