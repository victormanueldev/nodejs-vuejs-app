module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'nodejs_db', 
        user: process.env.DB_USER || 'root',
        pass: process.env.DB_PASS || 'practy',
        options: {
            dialect: process.env.DIALECT || 'mysql', 
            host: process.env.HOST || 'localhost'
        }
    }
}