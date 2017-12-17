import React from 'react';

const TollInfo = (props) => {
  if (props.dir === 'e') {
    return (
      <div className="content-card warning">
        <h1>East Bound Toll Times</h1>
        <h1>5:30 AM to 9:30 AM</h1>
      </div>);
  }
  return (
    <div className="content-card warning">
      <h1>West Bound Toll Times</h1>
      <h1>3:00 PM to 7:00 PM</h1>
    </div>);
};

export default TollInfo;
