const express = require('express')


const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Homepage')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Us')
})

app.use((req, res) => {
    res.status(400).send('404 Page')
})

app.listen(4000, () => {
    console.log('Listening on PORT 4000')
})