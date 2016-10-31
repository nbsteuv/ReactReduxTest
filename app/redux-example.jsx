var redux = require('redux');
var axios = require('axios');

var nameReducer = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

//In ES6, properties set to variables of same name can be written as below
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

var nextHobbyId = 1;
var hobbyReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_HOBBY':
    return [
      ...state,
      {
        id: nextHobbyId++,
        hobby: action.hobby
      }
    ];
    case 'DELETE_HOBBY':
    return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var deleteHobby = (id) => {
  return {
    type: 'DELETE_HOBBY',
    id
  };
};

var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type){
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  };
};

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

var fetchLocation = () => {
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function(res){
    var loc = res.data.loc;
    var baseUrl = 'http://maps.google.com?q=';
    store.dispatch(completeLocationFetch(baseUrl + loc));
  });
};

//Redux method combineReducers gets argument of properties and the reducers that handle them
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbyReducer,
  map: mapReducer
});

var store = redux.createStore(reducer, redux.compose(
  //f => f takes argument f and returns it, keeping system from stopping
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

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

store.dispatch(changeName('Nicholas'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Swimming'));

store.dispatch(deleteHobby(1));

fetchLocation();
