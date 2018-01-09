import React from 'react';
import AnalyticsContainer from '../components/AnalyticsContainer';

const Analytics = () => (
  <div className="center-text">
    <h1>Toll Analytics</h1>
    <AnalyticsContainer route="eb/belt/washington" metric="time" drop={2} title="Beltway to Washington" />
    <AnalyticsContainer route="eb/dulles/washington" metric="time" drop={2} title="Dulles to Washington" />
    <AnalyticsContainer route="eb/glebe/washington" metric="time" drop={2} title="Glebe to Washington" />
    <AnalyticsContainer route="wb/washington/belt" metric="time" title="Washington to Beltway" />
    <AnalyticsContainer route="wb/washington/dulles" metric="time" title="Washington to Dulles" />
    <AnalyticsContainer route="wb/washington/glebe" metric="time" title="Washington to Glebe" />
  </div>
);

export default Analytics;
