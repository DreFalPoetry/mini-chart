import Axios from 'axios';
const url = 'https://easy-mock.com/mock/5d2ec63f6c3b2b2902554a48/api/chartData';

window.isFetching = false
export function fetchingData(url){
  window.isFetching = true;
  return Axios.get(url).then((response) => {
    // handle success
    if(response && response.status == 200){
      const visitData = response.data.data || [];
      return visitData
    }else{
      return []
    }
  })
  .catch(function (error) {
    return []
  })
}

export function isFetching(){
  return window.isFetching
};