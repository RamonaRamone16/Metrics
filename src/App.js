import { UserActivityTable } from "./components/UserActivityTable";

const App = () => {
  const usersActivities = [
    {id: 1, dateRegistration: '2021-09-01', dateLastActivity: '2021-09-20'},
    {id: 1, dateRegistration: '2021-09-03', dateLastActivity: '2021-09-04'},
    {id: 2, dateRegistration: '2021-09-15', dateLastActivity: '2021-09-27'}
  ];

  return (
    <UserActivityTable usersActivities={usersActivities}/>
  )
}
export default App;
