const {template} = require('lodash')
const {readFileSync} = require('fs')
const {Ability} = require('@casl/ability')

let compileJSONrole = (filename) => {
  const rawText = readFileSync(filename)
  const compiledTemplate = template(rawText)
  return options => {
    const jsonRole = compiledTemplate(options)
    const role = JSON.parse(jsonRole)
    return new Ability(role)
  }
}

module.exports = {
  admin: compileJSONrole('./admin.json'),
  customer: compileJSONrole('./customer.json'),
  anonymous: compileJSONrole('./anonymous.json')
}
