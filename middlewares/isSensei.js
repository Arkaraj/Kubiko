// Middleware to check if its teacher or not

const isSensei = (req, res, next) => {

    if (req.user.role == "teacher") {
        next();
    }
    else {
        res.status(401).json({ message: "You are not a Teacher" })
    }

}

module.exports = isSensei;