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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
  console.log(state);
});

// var changeSearchText = {
//   type: 'CHANGE_SEARCH_TEXT',
//   searchText: 'New text'
// };

function createSearchTextDispatch(text){
  return {
      type: 'CHANGE_SEARCH_TEXT',
      searchText: text
  }
}

function changeSearchText(text){
  store.dispatch(createSearchTextDispatch(text));
}

changeSearchText('awegwoeig');
changeSearchText('New Search Text');
