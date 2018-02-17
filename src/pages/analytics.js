import React from 'react';
import AnalyticsContainer from '../components/AnalyticsContainer';
import DayAnalyticsContainer from '../components/DayAnalyticsContainer';

const Analytics = () => (
  <div className="center-text">
    <h1>Toll Analytics</h1>
    <br />
    <h2>By Time</h2>
    <AnalyticsContainer route="eb/belt/washington" metric="time" drop={2} title="Beltway to Washington" />
    <AnalyticsContainer route="eb/dulles/washington" metric="time" drop={2} title="Dulles to Washington" />
    <AnalyticsContainer route="eb/glebe/washington" metric="time" drop={2} title="Glebe to Washington" />
    <AnalyticsContainer route="wb/washington/belt" metric="time" title="Washington to Beltway" />
    <AnalyticsContainer route="wb/washington/dulles" metric="time" title="Washington to Dulles" />
    <AnalyticsContainer route="wb/washington/glebe" metric="time" title="Washington to Glebe" />

    <h2>By Day</h2>
    <DayAnalyticsContainer route="eb/belt/washington" metric="day" title="Beltway to Washington" />
    <DayAnalyticsContainer route="eb/dulles/washington" metric="day" title="Dulles to Washington" />
    <DayAnalyticsContainer route="eb/glebe/washington" metric="day" title="Glebe to Washington" />
    <DayAnalyticsContainer route="wb/washington/belt" metric="day" title="Washington to Beltway" />
    <DayAnalyticsContainer route="wb/washington/dulles" metric="day" title="Washington to Dulles" />
    <DayAnalyticsContainer route="wb/washington/glebe" metric="day" title="Washington to Glebe" />
  </div>
);

export default Analytics;
