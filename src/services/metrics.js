import { ActionCreators } from "../app/userActivityReducer"

export const GetUsresActivities = async (dispatch) => {
  try {
    const usersActivities = [
      {id: 1, dateRegistration: '2021-09-01', dateLastActivity: '2021-09-20'},
      {id: 1, dateRegistration: '2021-09-03', dateLastActivity: '2021-09-04'},
      {id: 2, dateRegistration: '2021-09-15', dateLastActivity: '2021-09-27'}
    ];

    dispatch(ActionCreators.setMetrics(usersActivities));
  }
  catch {
    
  }
}