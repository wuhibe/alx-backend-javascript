import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((vals) => {
      vals.forEach((val) => {
        if (val.status === 'fulfilled') arr.push({ status: val.status, value: val.value });
        else arr.push({ status: val.status, value: `Error: ${val.reason.message}` });
      });
      return arr;
    });
}
