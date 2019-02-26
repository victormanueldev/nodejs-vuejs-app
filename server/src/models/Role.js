module.exports = (sequelize, DataTypes) =>
    sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        desc: {
            type: DataTypes.STRING,
            unique: true
        }
    },{
        classMethods:{
            associate: (models) => {
                models.Role.belongsTo(models.User)
            }
        }
    })


