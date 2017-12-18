import firebase from 'firebase';
import moment from 'moment';
import { curry } from 'ramda';

const getFirebase = () => {
  const config = {
    apiKey: 'AIzaSyCM5BnpcIywV85kyBAawGAaRBBHUvNn3EU',
    authDomain: 'i66toll.firebaseapp.com',
    databaseURL: 'https://i66toll.firebaseio.com',
    projectId: 'i66toll',
    storageBucket: 'i66toll.appspot.com',
    messagingSenderId: '180988107064',
  };

  return !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
};


const format = 'hh:mm:ss';
const ebStart = '10:30:00';
const ebEnd = '14:30:00';
const wbStart = '20:00:00';
const wbEnd = '23:59:00';
// for 7:00 to morning
const midNight = '00:00:00';

const isBetween = curry((f, s, ct) => {
  const startTime = moment.utc(f, format);
  const endTime = moment.utc(s, format);
  return ct.isBetween(startTime, endTime);
});

const isWeekend = () => {
  const dayOfWeek = moment().weekday();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

const isCurEast = isBetween(ebStart, ebEnd);

const isCurWest = isBetween(wbStart, wbEnd);

const isNextWest = isBetween(ebEnd, wbStart);

const isNextEast = isBetween(midNight, ebStart);

const curTime = () => moment().utc();

export { getFirebase,
  isWeekend,
  format,
  curTime,
  isCurEast,
  isCurWest,
  isNextWest,
  isNextEast };
