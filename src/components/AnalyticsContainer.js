import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';
import { getFirebase } from '../util/utility';
import { drop, sortBy, prop, compose, takeWhile, when, always } from 'ramda';
import moment from 'moment';

export default class AnalyticsContainer extends Component {
  defaultProps = {
    drop: 0,
  }

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
        const showVal = compose(sortBy(prop('value')))(newVal);
        const dropVal = compose(takeWhile(y => (y.value !== '9:30')), drop(this.props.drop))(showVal);
        this.setState({ data: dropVal });
      });
  }

  timeToZone = (time) => {
    const date = moment().format('YYYY-MM-DD');

    const { length } = time;
    return moment(moment.utc(`${date} ${length === 4 ? `${time}0` : time}`).toDate()).format('h:mm');
  }

  render() {
    return (
      <div className="chart-contain">
        <h2>{this.props.title}</h2>
        <div className="analytics-container">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={this.state.data ? this.state.data : []}
              margin={{
                        top: 5, bottom: 5, left: 20, right: 20,
                      }}
            >
              <XAxis minTickGap={8} interval="preserveStartEnd" dataKey="value" />
              <YAxis label={{ value: 'price', angle: -90 }} />
              <CartesianGrid strokeDasharray="3 3" />
              <Line strokeWidth={3} dot type="basis" dataKey="avg" stroke="#82ca9d" />
            </LineChart>

          </ResponsiveContainer>

        </div>
      </div>
    );
  }
}
