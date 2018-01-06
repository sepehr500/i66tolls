import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';
import { getFirebase } from '../util/utility';
import { drop } from 'ramda';
import moment from 'moment';

export default class AnalyticsContainer extends Component {
  state = {
    data: [],
  }

  componentWillMount() {
    const fb = getFirebase();
    this.setAnalytData(this.props.route, fb);
  }

  setAnalytData = (route, fb) => {
    fb.database().ref(`${route}/analyt/${this.props.metric}`)
      .on('value', (snapshot) => {
        const val = snapshot.val();
        const newVal = val.map(x => ({ avg: x.avg, value: this.timeToZone(x.value) }));
        this.setState({ data: drop(2, newVal) });
      });
  }

  timeToZone = (time) => {
    const date = moment().format('YYYY-MM-DD');
    return moment(moment.utc(`${date} ${time}`).toDate()).format('h:mm');
  }

  render() {
    return (
      <div>
        <LineChart
          width={900}
          height={300}
          data={this.state.data ? this.state.data : []}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis interval="preserveStartEnd" dataKey="value" />
          <YAxis label={{ value: 'price', angle: -90 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Line strokeWidth={3} dot type="basis" dataKey="avg" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}
