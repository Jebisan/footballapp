const INITIAL_STATE = {
  predictions: [],
  pendingGoals: undefined,
  pendingShotsOnGoal: undefined,
  pendingThrowIns: undefined,
  pendingCorners: undefined,
  pendingFreekicks: undefined,
  pendingYellowCards: undefined,
  pendingOffsides: undefined,
};

export default predictionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PREDICT':
      return {...state,
        predictions: [...state.predictions,
        { eventkey: action.eventkey, prediction: action.prediction }
        ]
      }

    case 'SET_PENDING_GOALS':
      return { ...state, pendingGoals: action.pendingGoals }

    case 'SET_PENDING_SHOTS_ON_GOAL':
      return { ...state, pendingShotsOnGoal: action.pendingShotsOnGoal }

    case 'SET_PENDING_THROW_INS':
      return { ...state, pendingThrowIns: action.pendingThrowIns }

    case 'SET_PENDING_CORNERS':
      return { ...state, pendingCorners: action.pendingCorners }

    case 'SET_PENDING_FREEKICKS':
      return { ...state, pendingFreekicks: action.pendingFreekicks }

    case 'SET_PENDING_YELLOW_CARDS':
      return { ...state, pendingYellowCards: action.pendingYellowCards }

    case 'SET_PENDING_OFFSIDES':
      return { ...state, pendingOffsides: action.pendingOffsides }

    default:
      return state
  }
};
