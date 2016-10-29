var redux = require('redux');

//Reducer with ES6 default for state
var reducer = (state = {name: 'Anonymous'}, action) => {
  //ES5 way to set default:
  // state = state || {name: 'Anonymous'};
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log(currentState);
