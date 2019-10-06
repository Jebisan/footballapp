export const PREDICT = 'PREDICT';

export const predict = ({eventkey, prediction}) => {
    return { type: PREDICT, eventkey, prediction};
};

export const setLeague = (leagueId) => {
    return { type: SET_LEAGUE, leagueId};
};