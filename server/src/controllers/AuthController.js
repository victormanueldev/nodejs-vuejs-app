const { User } = require('../models')

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user)
        } catch (err) {
            res.status(400).send({
                error: err
            })
        }
    },

    async findEmail(req, res) {
        const user = await User.findOne({
            attributes: ['name', 'email'],
            where: {
                email: req.body.email
            }
        })
        if(!user){
            res.status(403).send({
                error: 'This email is not exists, please create an account.'
            })
        }else{
            res.send(user)
        }
    }
}