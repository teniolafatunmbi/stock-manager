const ACTIONS = {
  SET_USER: 'SET_USER',
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {};
    default:
      return state;
  }
};
export default AppReducer;
