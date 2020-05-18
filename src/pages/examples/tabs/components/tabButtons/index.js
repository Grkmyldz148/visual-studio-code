import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import { withRouter } from 'react-router-dom';

const NoStyledTabButtons = ({ classes, data, activeTab, setActiveTab }) => {
   return <ul style={{ display: "flex" }}>
      {
         data.map(tab => <li
            style={{
               marginLeft: 10,
               display: "flex",
               transition: "1s",
               color: activeTab === tab.name ? "#ffffff" : "",
               borderBottom: activeTab === tab.name ? "1px solid #f5f5f5" : "",
            }}
            onClick={() => setActiveTab(tab.name)}
         >
            {tab.title}
         </li>

         )
      }
   </ul>
}
const TabButtons = injectShet(style)(NoStyledTabButtons);
export default withRouter(TabButtons);