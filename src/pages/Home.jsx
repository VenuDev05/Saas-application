import React from 'react'
import Course from './Course'
import Data from '../data/Data'

const Home = () => {
  return (
    <div>
      <Course  items = {Data}/>
    </div>
  )
}

export default Home