const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.set('view engine', 'ejs')
app.use(express.static('public'))

const articles = {}
function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

createArticle({
  title: 'Curry Leaf',
  content: 'This is one of the top rated Indian restaurants in Grand Rapids. They serve modern and traditional recipes.',
  image: '/img/curry-leaf.jfif',
  drink: 'Mango Lassi',
  website: 'http://curryleafmi.com/',
  restaurantName: 'Curry Leaf'
})
createArticle({
  title: 'Bombay Cousine',
  content: 'One of the oldest and finest Indian cousines in Grand Rapids.',
  image: '/img/bombay-cousine.jfif',
  drink: 'Iced Coffee',
  website: 'http://www.eatatbombay.com/',
  restaurantName: 'Bombay Cousine'
})
createArticle({
  title: 'Pind',
  content: 'One of the newest Indian restaurants that have opened during covid at the heart of downtown Grand Rapids.',
  image: '/img/pind.jfif',
  drink: 'Chai',
  website: 'http://www.pindindian.com/',
  restaurantName: 'Pind Indian Cousine'
})

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

app.get('/curry-leaf', function (request, response) {
  response.render('pages/indian-restaurants', {
    restaurant: articles[0]
  })
})

app.get('/bombay-cousine', function (request, response) {
  response.render('pages/indian-restaurants', {
    restaurant: articles[1]
  })
})

app.get('/pind', function (request, response) {
  response.render('pages/indian-restaurants', {
    restaurant: articles[2]
  })
})

app.listen(port)
