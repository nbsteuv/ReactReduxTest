var redux = require('redux');

var storeDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = storeDefault, action) => {
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
  }
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log(currentState);

// var changeSearchText = {
//   type: 'CHANGE_SEARCH_TEXT',
//   searchText: 'New text'
// };

function changeSearchText(text){
  return {
      type: 'CHANGE_SEARCH_TEXT',
      searchText: text
  }
}

store.dispatch(changeSearchText('Text changed in function'));

console.log(store.getState());
