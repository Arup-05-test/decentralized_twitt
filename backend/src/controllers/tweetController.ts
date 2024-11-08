import { Request, Response } from 'express';
import Tweet from '../models/Tweet';
import Like from '../models/Like';

export const createTweet = async (req: Request, res: Response) => {
  const { content, userId } = req.body;
  try {
    const tweet = await Tweet.create({ content, userId });
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).json({ message: 'Error creating tweet' });
  }
};

export const getAllTweets = async (req: Request, res: Response) => {
  try {
    const tweets = await Tweet.findAll({ include: [{ model: Like }] });
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tweets' });
  }
};
