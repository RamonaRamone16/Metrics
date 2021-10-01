import './style/App.css';
import { UserActivityTable } from "./components/UserActivityTable";
import { MyButton } from './components/UI/button/MyButton';
import { UserActivityForm } from './components/UserActivityForm';
import { useState } from 'react';

const App = () => {
  const [usersActivities, setUsersActivities] = useState([]);
  const [isFormHidden, setIsFormHidden] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(true);

  const createUserActivity = (newUserActivity) => {
    setUsersActivities([...usersActivities, newUserActivity]);
  }

  document.addEventListener('click', () => {
    setIsFormHidden(false);
    setIsButtonHidden(true);
  })

  return (
    <div
      style={{
        margin: '25px auto'
      }}
    >
      <UserActivityTable usersActivities={usersActivities}/>
      { isFormHidden && <UserActivityForm create={createUserActivity}/>}
      <div>
        { isButtonHidden &&
        <MyButton 
          onClick={(e) => {
            e.stopPropagation();
            setIsFormHidden(true);
            setIsButtonHidden(false);
          }}
          style={{
            margin: '25px 0'
          }}

        > 
          Add user activity
        </MyButton>
        }
        { usersActivities && 
          <MyButton
            onClick={(e) => e.stopPropagation()}
          >
            Save
          </MyButton>
        }
      </div>
      
    </div>
  )
}
export default App;
