const getUser = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name": "Jason"}})
}

module.exports = {
    getUser
}