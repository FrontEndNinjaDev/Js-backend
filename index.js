// console.log("hello world");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req , res )=>{ 
    res.send('ankit pratap')
})

// we are getting a route from express then we are getting the response so we are just sending a response 
// * app.get(path, callback [, callback ...])
// *Routes HTTP GET requests to the specified path with the specified callback functions.

app.get('/login',(req , res)=>{
    res.send('<h1>Please Login On </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>youtube</h2>')
})
app.get('/instagram',(req,res)=>{
  res.send('<h2>Instagram</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

