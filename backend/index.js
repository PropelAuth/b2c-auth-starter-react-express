const express = require('express')
const app = express()
const port = 3001

app.get('/api/whoami', (req, res) => {
    // TODO: return something useful
    res.json({'test': 'test'});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
