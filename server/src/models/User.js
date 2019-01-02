module.exports = (sequelize, DataTypes) => 
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        password: DataTypes.STRING
    })