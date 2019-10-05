import {PREDICT} from '../actions/fixtures';

const initialState = {
fixtures: [],
predicted: [],
favorites: []
};

const fixturesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
          return state;
      }
}


export default fixturesReducer;