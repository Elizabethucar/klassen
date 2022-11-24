const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use('/api/user', require('./routes/userRoutes'))


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
