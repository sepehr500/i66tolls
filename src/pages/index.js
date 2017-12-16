import React from 'react';
import Button from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import TollContainer from '../components/TollContainer';

const style = {
  backgroundColor: '#0060e8',


};

const IndexPage = () => (
  <div className="toll-column">
    <Tabs>
      <Tab
        style={style}
        label="East bound"
      />
      <Tab
        style={style}
        label="West bound"
      />
    </Tabs>
    <TollContainer mainText="Glebe to Washington" route="eb/glebe/washington" />
    <TollContainer mainText="Washington to Dulles" route="wb/washington/dulles" />
  </div>);

export default IndexPage;
