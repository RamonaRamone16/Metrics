import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserActivityItem } from './UserActivityItem';

export const UserActivityTable = ({usersActivities}) => {

  return (
    <div style={{
      margin: '25px auto'
    }}> 
      <UserActivityItem userActivity={{
        id: 'UserId', 
        dateRegistration: 'DateRegistration',
        dateLastActivity: 'DateLastActivity'
      }}/>
      {usersActivities.map(x => {
        return (<UserActivityItem userActivity={{
          id: x.id, 
          dateRegistration: x.dateRegistration,
          dateLastActivity: x.dateLastActivity
        }}
          key={x.id}
        />)
      })

      }
    </div>
  )

}