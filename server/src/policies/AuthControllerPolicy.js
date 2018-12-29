const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        if(error){
            switch (error.details[0].context.key) {
                case 'email':
                   res.status(400).send({
                       key: 'email',
                       error: 'Enter a valid email'
                   }) 
                    break
                case 'password':
                   res.status(401).send({
                       key: 'password',
                       error: `The password provided failed to match the follwoing rules: 
                            <br>
                            1. It must contain ONLY the following characters: lower case, upper case and number to 0 from 9
                            <br>
                            2. It must be at least 8 characters in length and not greater to 32
                        `
                   })
                   break
            
                default:
                   res.status(400).send({
                       error: 'Please enter a valid information'
                   })
                    break
            }
        }else{
            next()
        }
    }
}