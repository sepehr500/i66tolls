import React, { Component } from 'react';
import moment from 'moment';
import { getFirebase } from '../util/utility';

export default class TollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { dollars: '', relativeTime: '', avg: 0 };
  }

  componentWillMount() {
    const fb = getFirebase();
    fb.database().ref(`${this.props.route}/tolls`).orderByKey().limitToLast(1)
      .on('value', (snapshot) => {
        const val = snapshot.val();
        const timestamp = parseInt(Object.keys(val)[0]);
        const relativeTime = moment.utc(timestamp).fromNow();
        const price = Object.values(val)[0].price;
        const dollars = `$${price.toFixed(2)}`;
        this.setState({ dollars, relativeTime });
      });
    fb.database().ref(`${this.props.route}/meta`).on('value', (s) => {
      this.setState({ avg: s.val().avg.toFixed(2) });
    });
  }

  render() {
    return (
      <div className="toll-container">
        <div className="toll-container-top">
          <h1>{this.props.mainText}</h1>
        </div>
        <div className="toll-container-bottom">
          <div className="toll">
            <h1>{this.state.dollars}</h1>
          </div>
        </div>
        <div className="toll-container-footer">
          <h2>{this.state.relativeTime}</h2>
          <h2>{`Average $${this.state.avg}`}</h2>
        </div>
      </div>);
  }
}
