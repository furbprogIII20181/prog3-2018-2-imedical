'use strict';
module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define(
        'News',
        {
            Title: DataTypes.STRING(9999),
            Content: DataTypes.STRING(9999),
            likes: DataTypes.INTEGER
        },
        {}
    );
    News.associate = function(models) {
        News.belongsTo(models.User, {
            foreignKey: 'fk_userid',
            targetKey: 'id'
        });
    };
    return News;
};
