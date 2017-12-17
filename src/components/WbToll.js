import React from 'react';
import TollContainer from './TollContainer';

const WbToll = () => (
  <div>
    <TollContainer mainText="Washington to Dulles" route="wb/washington/dulles" />
    <TollContainer mainText="Washington to Glebe" route="wb/washington/glebe" />
  </div>
);

export default WbToll;
