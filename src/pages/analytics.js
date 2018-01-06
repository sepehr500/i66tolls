import React from 'react';
import AnalyticsContainer from '../components/AnalyticsContainer';

const Analytics = () => (
  <div>
    <AnalyticsContainer route="eb/belt/washington" metric="time" drop={2} title="Beltway to Washington" />
    <AnalyticsContainer route="wb/washington/belt" metric="time" title="Washington to Beltway" />
  </div>
);

export default Analytics;
