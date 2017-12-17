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

// Find out if it is toll time
// we = weekend
// ce = currently east
// cw = currently west
// ne = next east
// nw = next <wes></wes>t

const format = 'hh:mm:ss';
const ebStart = '10:30:00';
const ebEnd = '14:30:00';
const wbStart = '20:00:00';
const wbEnd = '23:59:00';
// for midnight to morn
const midNight = '00:00:00';

const isBetween = curry((f, s, ct) => {
  const startTime = moment(f, format).utc();
  const endTime = moment(s, format).utc();
  return ct.isBetween(startTime, endTime);
});

const isWeekend = () => {
  const dayOfWeek = moment().weekday();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return true;
  }
  return false;
};

const isCurEast = isBetween(ebStart, ebEnd);

const isCurWest = isBetween(wbStart, wbEnd);

const isNextWest = isBetween(ebEnd, wbStart);

const isNextEast = isBetween(midNight, ebStart);


const curTime = () => moment().utc();

const dirTime = () => {
  const ct = moment(format).utc();
  const dayOfWeek = moment().weekday();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return 'we';
  }

  if (isBetween(ct, ebStart, ebEnd)) {
    return 'ce';
  }

  if (isBetween(ct, wbStart, wbEnd)) {
    return 'cw';
  }

  if (isBetween(ct, midNight, ebStart)) {
    return 'ne';
  }

  if (isBetween(ct, ebEnd, wbStart)) {
    return 'nw';
  }

  return null;
};

export { getFirebase,
  dirTime,
  isWeekend,
  format,
  curTime,
  isCurEast,
  isCurWest,
  isNextWest,
  isNextEast };
