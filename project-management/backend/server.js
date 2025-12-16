const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/api/health', (req, res) => {
  res.json({status: 'ok'})
})

app.listen(port, () => console.log(`Backend listening on ${port}`))
