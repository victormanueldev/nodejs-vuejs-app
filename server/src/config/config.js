module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'nodejs_practice_vue', 
        user: process.env.DB_USER || 'postgres',
        pass: process.env.DB_PASS || 'postgres',
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || '172.19.0.3',
            port: '5432'
        }
    }
}