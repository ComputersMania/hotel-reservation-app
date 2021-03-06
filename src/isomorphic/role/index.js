const {template} = require('lodash')
const {readFileSync} = require('fs')
const path = require('path')
const {Ability} = require('@casl/ability')

let compileJSONrole = (filename) => {
  const filePath = path.join(__dirname, filename)
  const rawText = readFileSync(filePath, 'utf8')
  const compiledTemplate = template(rawText)
  return options => {
    const jsonRole = compiledTemplate(options)
    const role = JSON.parse(jsonRole)
    return new Ability(role)
  }
}

const roles = {
  admin: compileJSONrole('admin.json'),
  employee: compileJSONrole('employee.json'),
  customer: compileJSONrole('customer.json'),
  anonymous: compileJSONrole('anonymous.json')
}

module.exports = user => {
  if (roles[ user.role ]) {
    return roles[this.role]( {user: user} )
  } else {
    return roles.anonymous( {user: user} )
  }
}
