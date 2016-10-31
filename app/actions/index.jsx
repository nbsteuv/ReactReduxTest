//In ES6, can use export before individual functions

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

export var deleteHobby = (id) => {
  return {
    type: 'DELETE_HOBBY',
    id
  };
};

export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

export var fetchLocation = () => {
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function(res){
    var loc = res.data.loc;
    var baseUrl = 'http://maps.google.com?q=';
    store.dispatch(completeLocationFetch(baseUrl + loc));
  });
};
