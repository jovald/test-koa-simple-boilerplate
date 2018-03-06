const User = require('./model')

exports.read = async () => {
  const users = await User.find()
  return users
}

exports.create = async ({ data = {} } = {}) => {
  const user = await User.create(data)
  return user
}
