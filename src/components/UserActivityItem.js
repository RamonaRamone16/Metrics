import { React } from 'react';

export const UserActivityItem = ({userActivity}) => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '80%',
      border: '1px solid #DEE2EA',
      alignItems: 'center',
      padding: '15px'
    }}>
      <div>
        {userActivity.id}
      </div>
      <div>
        {userActivity.dateRegistration}
      </div>
      <div>
        {userActivity.dateLastActivity}
      </div>
    </div>
  )
}