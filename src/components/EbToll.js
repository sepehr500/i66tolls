import React from 'react';
import TollContainer from './TollContainer';

const EbToll = props => (
  <div>
    <TollContainer mainText="Beltway to Washington" route="eb/belt/washington" {...props} />
    <TollContainer mainText="Glebe to Washington" route="eb/glebe/washington" {...props} />
    <TollContainer mainText="Dulles to Washington" route="eb/dulles/washington" {...props} />
  </div>
);

export default EbToll;
