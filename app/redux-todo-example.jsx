var redux = require('redux');

var storeDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = storeDefault, action) => {
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log(currentState);
