import sequelize from '../config/database';
import User from './User';
import Tweet from './Tweet';
import Like from './Like';

User.hasMany(Tweet);
Tweet.belongsTo(User);

Tweet.hasMany(Like);
Like.belongsTo(Tweet);

export { sequelize, User, Tweet, Like };
