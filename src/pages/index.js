import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import EbToll from '../components/EbToll';
import WbToll from '../components/WbToll';
import WeekEnd from '../components/WeekEnd';
import TollInfo from '../components/TollInfo';
import { curTime, isWeekend, isCurWest, isNextWest, isNextEast, isCurEast } from '../util/utility';

const style = {
  backgroundColor: '#0060e8',
};

const inkBarStyle = {
  backgroundColor: 'red',
  height: '5px',
};

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    const ct = curTime();
    console.log(ct);
    console.log(isNextWest(ct));
    console.log(isNextEast(ct));
    console.log(isCurEast(ct));
    console.log(isCurWest(ct));
    console.log(isWeekend(ct));
    this.state = { dir: isCurWest(ct) ? 'w' : 'e' };
  }

  handleChange = (dir) => {
    this.setState({ dir });
  }

  render() {
    const ct = curTime();
    return (
      <div className="toll-column">
        <Tabs onChange={this.handleChange} value={this.state.dir} inkBarStyle={inkBarStyle}>
          <Tab
            style={style}
            value="e"
            label="East bound"
          />
          <Tab
            value="w"
            style={style}
            label="West bound"
          />
        </Tabs>
        {
          isWeekend(ct) && <WeekEnd />
        }
        {this.state.dir === 'w' ? <TollInfo dir="w" active={isCurWest(ct)} /> : null}
        {this.state.dir === 'e' ? <TollInfo dir="e" active={isCurEast(ct)} /> : null}
        {this.state.dir === 'e' ? <EbToll /> : <WbToll />}
      </div>);
  }
}


// <TollContainer mainText="Washington to Beltway" route="wb/washington/belt" />
// <TollContainer mainText="Beltway to Washington" route="eb/belt/washington" />
// <TollContainer mainText="Dulles to Washington" route="eb/dulles/washington" />
