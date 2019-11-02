export const togglePredict = ({eventkey, prediction}) => {
    return { type: 'PREDICT', eventkey, prediction};
};

export const setLeague = (leagueId) => {
    return { type: 'SET_LEAGUE', leagueId};
};

//******************************************************************* */

export const setPendingGoals = (pendingGoals) => {
    return { type: 'SET_PENDING_GOALS', pendingGoals};
};

export const setPendingShotsOnGoal = (pendingShotsOnGoal) => {
    return {type: 'SET_PENDING_SHOTS_ON_GOAL', pendingShotsOnGoal};
};

export const setPendingThrowIns = (pendingThrowIns) => {
    return {type: 'SET_PENDING_THROW_INS', pendingThrowIns};
};

export const setPendingCorners = (pendingCorners) => {
    return {type: 'SET_PENDING_CORNERS', pendingCorners};
};

export const setFreekicks = (pendingFreekicks) => {
    return {type: 'SET_PENDING_FREEKICKS', pendingFreekicks};
};

export const setYellowCards = (pendingYellowCards) => {
    return {type: 'SET_PENDING_YELLOW_CARDS', pendingYellowCards};
};

export const setOffsides = (offsides) => {
    return {type: 'SET_PENDING_OFFSIDES', prediction};
};