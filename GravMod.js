
const md5 = require('md5')

module.exports = (email) => {
  return !email ? console.error('Must provide email address') : `http://www.gravatar.com/avatar/${md5(email)}`
}
