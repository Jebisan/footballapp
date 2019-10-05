import { PREDICT } from '../actions/fixtures';


const INITIAL_STATE = {
  predictions: [
    /*
    {
      id: '1',
      hometeam: 'FC Barcelona',
      awayteam: 'Real Madrid',
      eventtime: '01/11/2019',
      leaguename: 'Primera Divison',
    },
    {
      id: '2',
      hometeam: 'FC København',
      awayteam: 'Odense Boldklub',
      eventtime: '02/11/2019',
      leaguename: 'Superligaen',
    },
    {
      id: '3',
      hometeam: 'Manchester United',
      awayteam: 'Chelsea',
      eventtime: '03/11/2019',
      leaguename: 'Premier League',
    },*/
  ],
};

export default predictionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PREDICT:
      return {
        predictions: [...state.predictions,
        { eventkey: action.eventkey, prediction: action.prediction }
        ]
      }

    default:
      return state
  }
};
