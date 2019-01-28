const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('NaM!'))
app.get('/man', (req, res) => res.send('TEST NAM!'))

app.use(express.static(__dirname + '/public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))