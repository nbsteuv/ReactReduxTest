var redux = require('redux');
var {nameReducer, hobbyRecuer, mapReducer} = require('./../reducers/index');

export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
