const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	  res.setHeader('Connection', 'close')
	  res.send('Hello world from ' + (process.env.POD_NAME || "Docker container"))
})

app.listen(port, () => {
	  console.log(`App listening at http://localhost:${port}`)
})


