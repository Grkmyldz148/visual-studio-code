import React, { useState } from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import { withRouter } from 'react-router-dom';
import TabButtons from './components/tabButtons';
import TabContent from './components/tabContent';

const TABS = [
   {
      id: 1,
      name: "music",
      title: 'Müzik',
      content: "içerikk"
   },
   {
      id: 2,
      name: "software",
      title: 'Yazılım',
      content: "içeriks"
   },
   {
      id: 3,
      name: "graphics",
      title: 'Grafik',
      content: "içerika"
   },
   {
      id: 4,
      name: "eat",
      title: 'Yemek',
      content: "içerikq"
   }
];
const NoStyledTabs = ({ history, classes }) => {
   const [activeTab, setActiveTab] = useState("music");
   return <div className={classes.navbar}>
      <TabButtons
         data={TABS}
         activeTab={activeTab}
         setActiveTab={setActiveTab}
      />
      <TabContent
         data={TABS.find(e => e.name === activeTab)}
      />
   </div>
}
const Tabs = injectShet(style)(NoStyledTabs);
export default withRouter(Tabs);