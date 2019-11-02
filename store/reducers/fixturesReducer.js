const INITIAL_STATE = {
    leagueId: 515
};

export default fixturesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_LEAGUE':
            return {
                leagueId: action.leagueId
            }

        default:
            return state;
    }
}