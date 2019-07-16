import moment from 'moment';

window.isFetching = false
export function fetchingData(){
  window.isFetching = true;
  const visitData = [];
  const beginDay = new Date().getTime();
  for (let i = 0; i < 20; i += 1) {
    visitData.push({
      x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
      y: Math.floor(Math.random() * 100) + 10,
    });
  }
  return visitData
}

export function isFetching(){
  return window.isFetching
};