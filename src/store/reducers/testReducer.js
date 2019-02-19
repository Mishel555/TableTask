const initialState = {
  text: '',
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'asdasd': { return state; }

    default: return state;
  }
};

export default testReducer;
