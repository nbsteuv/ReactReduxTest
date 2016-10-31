var redux = require('redux');
var axios = require('axios');


var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New state', store.getState());
  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
  }
});

var currentState = store.getState();

console.log('Current state', currentState);

store.dispatch(actions.changeName('Nicholas'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Swimming'));

store.dispatch(actions.deleteHobby(1));

store.dispatch(actions.fetchLocation());
