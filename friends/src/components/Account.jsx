import React, { useState, useEffect } from 'react'
import api from '../utils/api'

function Account(props) {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    api().get('/api/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        throw (err)
      })
  }, [])

  return (
    <div className='account-wrapper'>
      <div className='user'>
        <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="" />
        <h1>Welcome to your Lambda Profile</h1>
      </div>
      <div className='friends-list'>
        {friends.map(item => (
          <div key={item.id} className='friends'>
            <img src={item.avi} alt="monster avatar" />
            <div className='friends-details'>
              <h2>{item.name}</h2>
              <h3>{item.age}</h3>
              <h3 className='email'>{item.email}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Account


