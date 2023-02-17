import React from 'react'

import {leaderboard , get_balance} from '../../../test'

export default function Leaderboard() {

  const [Leaderboard, setLeaderboard] = React.useState([])





  function getleaderboard() {
    console.log("before")
    let leaderboard_data = leaderboard()
    console.log("after")
    console.log(leaderboard_data)
  }





  return (
    <div>
      <button onClick={getleaderboard}>Leaderboard</button>
    </div>
  )
}
