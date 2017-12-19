import React from 'react';
import TollContainer from './TollContainer';

const WbToll = props => (
  <div>
    <TollContainer mainText="Washington to Beltway" route="wb/washington/belt" {...props} />
    <TollContainer mainText="Washington to Dulles" route="wb/washington/dulles" {...props} />
    <TollContainer mainText="Washington to Glebe" route="wb/washington/glebe" {...props} />
  </div>
);

export default WbToll;
