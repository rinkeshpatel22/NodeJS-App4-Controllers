let getUsers = (req, res) => {
    res.send('This is getUsers method response of userController');
}

// export controller
module.exports = {
    getUsers: getUsers
}