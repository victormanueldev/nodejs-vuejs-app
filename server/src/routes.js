const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
module.exports = (app) => {
    app.post("/register", 
        AuthControllerPolicy.register,
        AuthController.register)
    
    app.post("/findEmail",
        AuthController.findEmail
    )

    app.post("/login",
    AuthController.login
)
} 
