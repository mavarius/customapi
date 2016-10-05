const PORT = 8000

const http = require('http')
const qs = require('querystring')

const MathMod = require('./MathMod')
const GravMod = require('./GravMod')
const SAMod = require('./SAMod')
const AgeMod = require('./AgeMod')

const server = http.createServer((req, res) => {
  let { url, method } = req
  console.log(`${method} ${url}`)
  let [path, queryStr] = url.split('?')
  let query = qs.parse(queryStr)
  console.log('query: ', query)
  let param = path.split('/')
  console.log(param)

  let getHandlers = {
    math: (operator, num1, num2) => res.end(MathMod(operator, num1, num2)),
    gravatar: (email) => res.end(GravMod(email)),
    analyzeSentence: (sentence) => res.end(SAMod(sentence)),
    age: (month, day, year) => res.end(AgeMod(month, day, year))
  }

  switch (method) {
    case 'GET':
      !getHandlers[param[1]] ? console.error('Invalid Parameter') : getHandlers[param[1]](param[2], param[3], param[4])
      break
    default:
      res.statusCode = 404
      res.end('Invalid Method')
  }
})

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`)
})
