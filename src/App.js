import './style/App.css';
import { UserActivityTable } from "./components/UserActivityTable";
import { MyButton } from './components/UI/button/MyButton';
import { UserActivityForm } from './components/UserActivityForm';
import { useState } from 'react';
import { HiddenDiv } from './components/UI/hiddenDiv/HiddenDiv';

const App = () => {
  const [usersActivities, setUsersActivities] = useState([]);
  const [form, setForm] = useState(false);

  const createUserActivity = (newUserActivity) => {
    setUsersActivities([...usersActivities, newUserActivity]);
  }

  return (
    <div>
      <MyButton onClick={() => setForm(true)}> 
        Add user activity
      </MyButton>
      <UserActivityTable usersActivities={usersActivities}/>
      <HiddenDiv
        visible={form}
        setVisible={setForm}
      >
        <UserActivityForm create={createUserActivity}/>
      </HiddenDiv>
    </div>
  )
}
export default App;
