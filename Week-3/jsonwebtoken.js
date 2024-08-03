const jwt = require("jsonwebtoken")

const value = {
    name: "harkirat",
    accountNumber: 123123123
}

const token = jwt.sign(value, "secret")

