// passing data to front end of
exports.usersController = (req, res) => {
    res.json({
        usersList: ["user 1", "user 2"]
    })
}