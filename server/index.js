
const express = require('express')
const cors = require('cors')
var app = express()


app.use(cors())

app.get('/', (req, res) => {

    res.send()
    }
)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
    }
)

