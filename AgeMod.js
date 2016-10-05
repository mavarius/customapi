const moment = require('moment')

module.exports = (month, day, year) => {
  if (!month || !day || !year) {
    return console.error('Must provide date as MM/DD/YYYY')
  } else {
    let ageDeets = {
      birthday: `You were born on ${month}/${day}/${year}`,
      age: `You were born ${moment(`${year}${month}${day}`).fromNow()}`
    }

    return JSON.stringify(ageDeets)
  }
}
