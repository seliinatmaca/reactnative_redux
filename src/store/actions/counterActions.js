import {DECREMENT, INCREMENT, RESET} from '../types/countTypes';

// const incrementCount = () => {
//   return async dispatch => {
//     dispatch({type: 'INCREMENT'}); // İlk aksiyonu gönder
//     // Bir asenkron işlem yapılabilir, örneğin bir loglama API'sine çağrı:
//     await fetch('https://log-api.example.com/log', {
//       method: 'POST',
//       body: JSON.stringify({type: 'INCREMENT'}),
//     });
//   };
// };

// dispatch(incrementCount());

// const incrementCount = () => {
//   return {type: 'INCREMENT'}; // Düz bir nesne döndürüyor
// };

const incrementCount = () => {
  return async dispatch => {
    dispatch({type: INCREMENT});
  };
};
const decrementCount = () => {
  return async dispatch => {
    dispatch({type: DECREMENT});
  };
};
const resetCount = value => {
  return async dispatch => {
    dispatch({
      type: RESET,
      payload: value,
    });
  };
};

export {decrementCount, incrementCount, resetCount};
