import React from 'react'

import {leaderboard , get_balance} from '../../../test.js'
import Nav from '../../navbar/index.jsx'
export default function Leaderboard() {

  const [Leaderboard, setLeaderboard] = React.useState([])


  async function getleaderboard() {
    let leaderboard_data = await leaderboard()
    setLeaderboard(leaderboard_data)

  }


  return (
    <div>
      <Nav/>
      <button onClick={getleaderboard}>Leaderboard</button>


    {
      Leaderboard.map((item, index) => {
        return (
          <div key={index} style={{display: "flex"}}>
            <div style={{margin: "10px"}}>{item["reporter_adress"]}</div>
            <div style={{margin: "10px"}}>{item["score"]}</div>
          </div>
        )
      })
    }

    </div>
  )
}
