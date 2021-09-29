const initialState = {
  usersActivities: []
}

export const ActionTypes = {
  SET_METRICS: 'SET_USERACTIVITY',
}

export const ActionCreators = {
  setMetrics: payload => ({type: ActionTypes.SET_METRICS, payload}),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_METRICS: 
      return {...state, metrics: [...action.payload]};
    default:
      return state;
  }
}