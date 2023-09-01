const { loginUser, registerUser } = require('../service/auth.js')

const register = async (req, res, next) => {
    try {
    const { username, password, role } = req.body
    const { db } = req
    await registerUser({ db, username, password, role })
    res.status(201).json({ message: "User Registered" })
    } catch (error) {
    next(error)
    }
}


const login = async (req, res, next) => {
    try {
    const { username, password } = req.body
    const { db } = req
    const token = await loginUser({ db, username, password })
    res.json({ message: "User Succes Logged In", token })
    } catch (error) {
    next(error)
    }
}

module.exports = {register,login}