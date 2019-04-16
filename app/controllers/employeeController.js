let getEmployees = (req, res) => {
    res.send('This is getEmployees method response of employeeController');
}

// export controller
module.exports = {
    getEmployees: getEmployees
}