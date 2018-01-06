import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { CSSTransitionGroup, CSSTransition } from 'react-transition-group';
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
        <Tabs className="tab-button-size" onChange={this.handleChange} value={this.state.dir} inkBarStyle={inkBarStyle}>
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
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={0}
        >
          {this.state.dir === 'w' ? <TollInfo key={1} dir="w" active={isCurWest(ct) && !isWeekend(ct)} /> : null}
          {this.state.dir === 'e' ? <TollInfo key={2} dir="e" active={isCurEast(ct) && !isWeekend(ct)} /> : null}
          {this.state.dir === 'e' ? <EbToll key={3} current={isCurEast(ct) && !isWeekend(ct)} /> : <WbToll key={4} current={isCurWest(ct) && !isWeekend(ct)} />}
        </CSSTransitionGroup>
      </div>);
  }
}
