import express from 'express'
import cors from 'cors'

// import {leaderboard } from './test.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  // let data = leaderboard()
  // console.log(data)
  // res.send(data)
  // // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})