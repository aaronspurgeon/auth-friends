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
    <>
      <h1>Friends List</h1>
      {friends.map(item => (
        <div key={item.id}>
          <h2>Name: {item.name}</h2>
          <h3>Age: {item.age}</h3>
          <h3>Email {item.email}</h3>
        </div>
      ))}
    </>
  )
}

export default Account


