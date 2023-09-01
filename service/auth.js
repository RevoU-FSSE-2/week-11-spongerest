const bcrypt = require("bcrypt")
const StandardError = require("../constant/standard-error")
const generateToken = require("../utils/jwt-token")

const registerUser = async ({ db, username, password, role }) => {
    const user = await db.collection("users").findOne({ username })

    if (user) {
    throw new StandardError({ message: "Username already exists", status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
    username,
    password: hashedPassword,
    role,
    }

    const result = await db.collection("users").insertOne(newUser)
}

const loginUser = async ({ db, username, password }) => {
    const user = await db.collection("users").findOne({ username })

    if (!user) {
    throw new StandardError({ message: "User not found", status: 404 })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
    throw new StandardError({ message: "Password incorrect", status: 401 })
    }
    console.log('token')
    const token = generateToken({ id: user._id, role: user.role, username: user.username }, process.env.SECRET_KEY)

    return token
}

module.exports = { registerUser, loginUser}