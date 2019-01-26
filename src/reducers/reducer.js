const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD_MODEL":
      return [...state, action.payload];
    default:
      return state;
  }
};

const initialState = [];

export default reducer;
