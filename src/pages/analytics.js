import React from 'react';
import AnalyticsContainer from '../components/AnalyticsContainer';

const Analytics = () => (
  <div>
    <AnalyticsContainer route="eb/belt/washington" metric="time" />
    <AnalyticsContainer route="wb/washington/belt" metric="time" />
  </div>
);

export default Analytics;
