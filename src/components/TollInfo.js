import React from 'react';

const infoText = active => (active ? <h1>TOLL ACTIVE</h1> : <h1>Active Toll Times</h1>);
const TollInfo = (props) => {
  if (props.dir === 'e') {
    return (
      <div className="content-card warning">
        {infoText(props.active)}
        <h1>5:30 AM to 9:30 AM</h1>
      </div>);
  }
  return (
    <div className="content-card warning">
      {infoText(props.active)}
      <h1>3:00 PM to 7:00 PM</h1>
    </div>);
};

export default TollInfo;
