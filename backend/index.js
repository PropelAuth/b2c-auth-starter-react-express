const express = require('express')
const {requireUser} = require("./propelauth");

const app = express()
const port = 3001

app.get('/api/whoami', requireUser, (req, res) => {
    res.json({'user': req.user});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
