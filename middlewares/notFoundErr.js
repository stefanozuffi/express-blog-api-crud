function notFoundErr(req, res, next) {
    res
    .status(404)
    .json( {
        error: true,
        message: 'EndPoint Not Found'
    })
}

module.exports = notFoundErr