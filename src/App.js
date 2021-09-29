import './style/App.css';
import { UserActivityTable } from "./components/UserActivityTable";
import { MyButton } from './components/UI/button/MyButton';
import { UserActivityForm } from './components/UserActivityForm';
import { useState } from 'react';

const App = () => {
  const [usersActivities, setUsersActivities] = useState([ 
    {id: 1, dateRegistration: '2021-09-01', dateLastActivity: '2021-09-20'},
    {id: 1, dateRegistration: '2021-09-03', dateLastActivity: '2021-09-04'},
    {id: 2, dateRegistration: '2021-09-15', dateLastActivity: '2021-09-27'}
  ]);
  const [form, setForm] = useState(false);

  const createUserActivity = (newUserActivity) => {
    setUsersActivities([...usersActivities, newUserActivity]);
  }

  return (
    <div>
      <MyButton onclick={() => setForm(true)}/>
      <UserActivityTable usersActivities={usersActivities}/>
      <UserActivityForm visible={form} setVisible={setForm} create={createUserActivity}/>
    </div>
  )
}
export default App;
