const express = require("express")

const app = express()

const jsonparser = express.json()

const port = process.env.PORT || 3000

app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.static(__dirname + '/public'))

app.post("/register",jsonparser, ((req, res) => {
    console.log(req.body)
    if (!req.body) res.sendStatus(400)
    res.json(req.body)
}))

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`)
})
