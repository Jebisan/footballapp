const initialState = {
leagueId: 515
};

export default fixturesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LEAGUE':
            return {leagueId: action.leagueId
            }

        default:
          return state;
      }
}