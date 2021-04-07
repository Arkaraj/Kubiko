// Middleware to check if its teacher or not

const isStudent = (req, res, next) => {

    if (req.user.role == "student") {
        next();
    }
    else {
        res.status(401).json({ message: "You are not a Student" })
    }

}

module.exports = isStudent;