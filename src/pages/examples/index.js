import React from 'react';
import injectShet from 'react-jss';
import style from './stylesheet';
import Tabs from '../examples/tabs';
import Button from '../examples/button';
import Textbox from '../examples/textbox';
const NoStyledExamples = ({ history, classes }) => {
  return <div className={classes.container}>
    <div className={classes.headerBg}>
      <div className={classes.work}>
        <Button
          value="deneme"
          type="primary"
          size="sm"
        />
        <Button
          value="deneme"
          type="secondary"
          size="md"
        />
        <Button
          value="dark"
          type="dark"
          size="lg"
        />
        <hr></hr>
        <Textbox 
          type="nibgat"
          size="sm"
          icon=""
        />
      </div>
    </div>
  </div>
}
const Examples = injectShet(style)(NoStyledExamples);
export default Examples;