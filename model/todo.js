module.exports = (sequelize, Datatypes) => {
    return sequelize.define('todo',{
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        task: {
            type: Datatypes.STRING
        },
        completed: {
            type: Datatypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: Datatypes.DATE,
            defaultValue: new Date(),
            allowNull: false
        },
        updated_at: {
            type: Datatypes.DATE,
            defaultValue: new Date(),
            allowNull: false
        },
        deleted_at: {
            type: Datatypes.DATE
        }
    }, 
    {
        paranoid: true,
        underscored: true
    }
    );
}