import React, { Component } from 'react';
import moment from 'moment';
import { getFirebase } from '../util/utility';

export default class TollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { dollars: 0, relativeTime: '', avg: 0 };
  }

  componentWillMount() {
    const fb = getFirebase();
    fb.database().ref(`${this.props.route}/tolls`).orderByKey().limitToLast(1)
      .on('value', (snapshot) => {
        const val = snapshot.val();
        const timestamp = parseInt(Object.keys(val)[0]);
        const relativeTime = moment.utc(timestamp).fromNow();
        const dollars = Object.values(val)[0].price;
        this.setState({ dollars, relativeTime });
      });
    fb.database().ref(`${this.props.route}/meta`).on('value', (s) => {
      this.setState({ avg: s.val().avg.toFixed(2) });
    });
  }

  dollarsToText = dollars => `$${dollars.toFixed(2)}`
  isOver = (price, avg) => (price + 0.50 > avg ? 'over' : '')

  render() {
    const overClass = this.isOver(this.state.dollars, this.state.avg);
    return (
      <div className="toll-container">
        <div className={`toll-container-top ${overClass}`}>
          <h1>{this.props.mainText}</h1>
        </div>
        <div className="toll-container-bottom">
          <div className={`toll ${overClass}`}>
            <h1>{this.dollarsToText(this.state.dollars)}</h1>
          </div>
        </div>
        <div className="toll-container-footer">
          <h2>{this.state.relativeTime}</h2>
          <h2>{`Average $${this.state.avg}`}</h2>
        </div>
      </div>);
  }
}
