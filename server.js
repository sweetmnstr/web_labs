const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.use("/", ((req, res) => {
    res.redirect('/index')
}))

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`)
})
