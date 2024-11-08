import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Tweet extends Model {
  public id!: number;
  public content!: string;
  public userId!: number;
}

Tweet.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'tweet',
  }
);

export default Tweet;
