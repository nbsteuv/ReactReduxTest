export var nameReducer = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var nextHobbyId = 1;
export var hobbyReducer = (state = [], action) => {
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

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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
