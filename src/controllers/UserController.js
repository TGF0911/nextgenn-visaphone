const User = require('../models/User')

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body

    const user = await User.create({
      name,
      email,
      password
    })

    res.json(user)
  },

  async show(req, res) {
    const { email } = req.body

    const user = await User.findOne({ email : email })
    console.log(user)
    res.json(user)
  },

  async update(req, res) {
    const { password } = req.body
    const id = req.params.id

    const user = await User.where({ _id: id}).updateOne({password : password})
    res.json(user)
  },
  async destroy(req, res) {
    const id = req.params.id

    const user = await User.findOeAndDelete({ _id: id })

    res.json(user)
  },
  
  async showById(req, res) {
     const { id } = req.params;
    const user = await User.findById(id)

    res.json(user)
  }
}