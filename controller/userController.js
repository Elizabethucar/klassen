const users = [{ firstName: 'Lizzy', age: 10 }, { firstName: 'john', age: 20 }]

exports.getUser = (req, res) => {

  res.status(200).json({
    result: users.length,
    msg: 'hello klssen',
    status: 'success',
    data: users
  })
}

exports.getById = (req, res) => {
  res.status(200).json({
    msg: 'detta är user by Id',
    status: 'success'
  })
}
exports.postUser = (req, res) => {
  res.status(200).json({
    msg: 'detta är skapa',
    status: 'success'
  })
}
exports.updatUser = (req, res) => {
  res.status(200).json({
    msg: 'detta är uppdatera',
    status: 'success'
  })
}

exports.removeUser = (req, res) => {
  res.status(200).json({
    msg: 'detta är radera',
    status: 'success'
  })
}