const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(__dirname + '/dist/search-github-repo'))

app.listen(process.env.PORT || 8080)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/search-github-repo/index.html'))
})

console.log('console listening')
