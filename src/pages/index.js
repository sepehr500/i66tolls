import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import EbToll from '../components/EbToll';
import WbToll from '../components/WbToll';
import WeekEnd from '../components/WeekEnd';
import TollInfo from '../components/TollInfo';
import { curTime, isWeekend, isCurWest, isNextWest, isNextEast } from '../util/utility';

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
    this.state = { dir: isCurWest(ct) ? 'w' : 'e' };
  }

  componentDidMount() {

  }

  handleChange = (dir) => {
    this.setState({ dir });
  }

  render() {
    const ct = curTime();
    const weekend = isWeekend(ct);
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
          weekend && WeekEnd()
        }
        {this.state.dir === 'w' && (isNextWest(ct) || weekend) ? TollInfo({ dir: 'w' }) : null}
        {this.state.dir === 'e' && (isNextEast(ct) || weekend) ? TollInfo({ dir: 'e' }) : null}
        {this.state.dir === 'e' ? EbToll() : WbToll()}
      </div>);
  }
}


// <TollContainer mainText="Washington to Beltway" route="wb/washington/belt" />
// <TollContainer mainText="Beltway to Washington" route="eb/belt/washington" />
// <TollContainer mainText="Dulles to Washington" route="eb/dulles/washington" />
