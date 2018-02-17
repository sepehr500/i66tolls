import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';
import { getFirebase } from '../util/utility';
import { Card, CardTitle } from 'material-ui/Card';
import { sortBy } from 'ramda';

export default class DayAnalyticsContainer extends Component {
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
        this.setState({ data: snapshot.val() });
      });
  }

  dayMap = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
  }

  render() {
    return (
      <div style={{ paddingTop: '10px' }}>
        <Card>
          <CardTitle title={`${this.props.title} by day`} />
          <div className="chart-contain">
            <div className="analytics-container">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={this.state.data ? sortBy(i => this.dayMap[i.value], this.state.data) : []}
                  margin={{
                        top: 5, bottom: 5, left: 20, right: 25,
                      }}
                >
                  <XAxis minTickGap={8} interval="preserveStartEnd" dataKey="value" />
                  <YAxis label={{ value: 'average price', angle: -90 }} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line strokeWidth={3} dot type="basis" dataKey="avg" stroke="#82ca9d" />
                </LineChart>

              </ResponsiveContainer>

            </div>
          </div>
        </Card>
      </div>
    );
  }
}
