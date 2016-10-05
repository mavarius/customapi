const operate = {
  add: (num1, num2) => { return (num1 + num2) },
  subtract: (num1, num2) => { return (num1 - num2) },
  multiply: (num1, num2) => { return (num1 * num2) },
  divide: (num1, num2) => { return (num1 / num2) }
}

module.exports = (operator, num1, num2) => {
  if (!operator || !num1 || !num2) {
    return console.error('Must provide path: operator/number/number')
  } else if (!operate[operator]) {
    return console.error('invalid operator')
  } else {
    return (operate[operator](parseFloat(num1), parseFloat(num2))).toString()
  }
}
