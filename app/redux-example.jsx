var redux = require('redux');

var stateDefault = {
  name: 'Anonymous',
  hobbies: []
};

var nextHobbyId = 1;

var nameReducer = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

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

//Redux method combineReducers gets argument of properties and the reducers that handle them
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbyReducer
});

var store = redux.createStore(reducer, redux.compose(
  //f => f takes argument f and returns it, keeping system from stopping
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());
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

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Swimming'
});

store.dispatch({
  type: 'DELETE_HOBBY',
  id: 1
})
