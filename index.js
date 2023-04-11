const express = require('express')
const cors = require('cors')

// route
const EventRouter = require('./api/getEvents')
const PageviewsRouter = require('./api/getPageviews')

const app = express()

const port = 3000

app.use(cors());  // 跨域允许

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/getEvents', EventRouter)
app.use('/getPageviews', PageviewsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})