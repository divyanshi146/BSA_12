const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 5000;
const app = next({ dev })
const handle = app.getRequestHandler()

// Enable CORS for all routes  
app.use(cors());


app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
