import { Request, Response } from 'express';
import Like from '../models/Like';

export const likeTweet = async (req: Request, res: Response) => {
  const { tweetId, userId } = req.body;
  try {
    const like = await Like.create({ tweetId, userId });
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ message: 'Error liking tweet' });
  }
};

export const getTweetLikes = async (req: Request, res: Response) => {
  const { tweetId } = req.params;
  try {
    const likes = await Like.findAll({ where: { tweetId } });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching likes' });
  }
};
