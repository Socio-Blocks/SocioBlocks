import React from "react";

import { leaderboard, get_balance } from "../../../test.js";
import Nav from "../../navbar/index.jsx";
import CachedIcon from '@mui/icons-material/Cached';
import "./style.css"

export default function Leaderboard({setCoin}) {
  const [Leaderboard, setLeaderboard] = React.useState([]);

  React.useEffect(() => {
    setCoin(false)
  },[])


  async function getleaderboard() {
    let leaderboard_data = await leaderboard();
    setLeaderboard(leaderboard_data);
  }

  return (
    <div >
      <Nav />
      <div class="ldcont">
      <button class="getld" onClick={getleaderboard}>Get Live Leaderboard<CachedIcon style={{marginLeft:"0.5em",marginBottom:"-0.2em"}}fontSize="medium"/></button>
      </div>

      <div class="container-wrap">
        <section id="leaderboard">
          <nav class="ladder-nav">
            <div class="ladder-title">
              <h1 style={{ display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "center" }}>Rankings</h1>
            </div>
          </nav>
          {Leaderboard ? (
            <>
              <table id="rankings" class="table table-no-more"  style={{ width: "100%"
    }}>
                <thead>
                  <tr>{/*style={{ display: "flex",justifyContent: "space-evenly" }}>*/}
                    <th>Address</th>
                    <th style={{wordWrap: "break-word"}}>Potholes detected</th>
                  </tr>
                </thead>
                <tbody>
                  {Leaderboard.map((item, index) => {
                    return (
                      <tr key={index} >
                        <td style={{ margin: "10px",wordWrap: "break-word"}}>
                          {item["reporter_adress"]}
                        </td>
                        <td style={{ margin: "10px", textAlign: "right" }}>{item["score"]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <></>
          )}
        </section>
      </div>
      {/* {
      Leaderboard.map((item, index) => {
        return (
          <div key={index} style={{display: "flex"}}>
            <div style={{margin: "10px"}}>{item["reporter_adress"]}</div>
            <div style={{margin: "10px"}}>{item["score"]}</div>
          </div>
        )
      })
    } */}
    </div>
  );
}
