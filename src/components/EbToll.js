import React from 'react';
import TollContainer from './TollContainer';

const EbToll = () => (
  <div>
    <TollContainer mainText="Beltway to Washington" route="eb/belt/washington" />
    <TollContainer mainText="Glebe to Washington" route="eb/glebe/washington" />
    <TollContainer mainText="Dulles to Washington" route="eb/dulles/washington" />
  </div>
);

export default EbToll;
