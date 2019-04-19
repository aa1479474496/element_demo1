const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

app.use('/test', history())
app.use('/test',express.static('dist/test'))

app.listen(9999, () => console.log('Example app listening on port 9999'))