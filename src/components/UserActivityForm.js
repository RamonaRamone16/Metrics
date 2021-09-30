import { React, useState } from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const UserActivityForm = ({create}) => {
  const [userActivity, setUserActivity] = useState({id: '', dateRegistration: '', dateLastActivity: ''});

  const createUserActivity = (e) => {
    e.preventDefault()
    create(userActivity);
    setUserActivity({id: '', dateRegistration: '', dateLastActivity: ''});
  }

  return (
      <form>
        <MyInput
        value={userActivity.id}
        onChange={e => setUserActivity({...userActivity, id: e.target.value})}
        type="input"
        placeholder="type user id"
        />
        <MyInput
        value={userActivity.dateRegistration}
        onChange={e => setUserActivity({...userActivity, dateRegistration: e.target.value})}
        type="input"
        placeholder="type user registration date"
        />
        <MyInput
        value={userActivity.dateLastActivity}
        onChange={e => setUserActivity({...userActivity, dateLastActivity: e.target.value})}
        type="input"
        placeholder="type user last activity date"
        />
        <MyButton onClick={createUserActivity}>Create</MyButton>
      </form>
  )
}
