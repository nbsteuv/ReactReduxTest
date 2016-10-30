var redux = require('redux');

//Reducer with ES6 default for state
var reducer = (state = {name: 'Anonymous'}, action) => {
  //ES5 way to set default:
  // state = state || {name: 'Anonymous'};
  console.log('New action', action);
  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  };
  return state;
};

var store = redux.createStore(reducer);

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
});

var currentState = store.getState();

console.log('Current state', currentState);

//Type property of action is the only required property
var action = {
  type: 'CHANGE_NAME',
  name: 'Nick'
};

//Dispatch action to store--must include in reducer
store.dispatch(action);

unsubscribe();
action.name = 'Jeff';
store.dispatch(action);
