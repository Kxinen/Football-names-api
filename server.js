const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())


const players = {
    "tom brady": {"name":"Tom Brady", "college": "Michigan"},
    "peyton manning": {"name":"Peyton Manning", "college": "University of Tennesse"},
    "brett favre": {"name":"Brett Favre", "college": "Southern Mississippi"},
    'unknown': {"name":"unknown" ,'college': 'unknown'}
   
}

app.get('/', (req,res) => {res.sendFile(__dirname + '/index.html')})

app.get('/api/:name', (req,res) => {
    const playerName = req.params.name.toLowerCase()
    if(players[playerName]) {
        res.json(players[playerName])
    }
    else{res.json(players['unknown'])}

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

