import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Like extends Model {
  public id!: number;
  public tweetId!: number;
  public userId!: number;
}

Like.init(
  {
    tweetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'like',
  }
);

export default Like;
