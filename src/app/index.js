const database = require('database')

exports.start = async () => {
  try {
    await database.connect()
    console.log('Connected to database')
  } catch (error) {
    console.log('Something went wrong', error)
  }
}
