const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const articles = {}
function createArticle (article) {
  const id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}
createArticle({
  title: 'Squirrel escapes squirrel prison, now at large!',
  content: 'Yesterday evening at 7:47PM, the criminal squirrel Rabid Rabindra got out of his cage.'
})
createArticle({
  title: 'Squirrel lured back into prison with peanut butter',
  content: 'This morning at 10:13PM, the smell of peanut butter drew Rabid Rabindra the squirrel back into his cage.'
})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

app.get('/about', function (request, response) {
  response.end('Ah, where to begin...')
})

app.listen(port)
