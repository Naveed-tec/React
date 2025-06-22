import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();

  // useParams returns an object of key/value pairs of URL parameters
  // In this case, it will return
  return (
    <div className='bg-gray-600 text-white p-4 text-3xl'>User: {userid}</div>
  )
}

export default User