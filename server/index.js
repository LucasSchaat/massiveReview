require('dotenv').config()
const express = require ('express')
const massive = require ('massive')
const ctrl = require('./controller')

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, () => console.log(`Server listening on Port: ${SERVER_PORT}`))
        console.log('db connected')
    })
    .catch(err => console.log(err))
    
// ENDPOINTS
app.get('/api/comments', ctrl.getComments)
app.post('/api/comments', ctrl.addComment)
app.put('/api/comments/:id', ctrl.updateComment)
app.delete('/api/comments/:id', ctrl.deleteComment)