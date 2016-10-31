var redux = require('redux');
//Thunk allows redux to work with actions that are not objects
var thunk = require('redux-thunk').default;

var {nameReducer, hobbyReducer, mapReducer} = require('./../reducers/index');

export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
