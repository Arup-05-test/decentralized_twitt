import express from 'express';
import { createTweet, getAllTweets } from '../controllers/tweetController';
import { likeTweet, getTweetLikes } from '../controllers/likeController';

const router = express.Router();

router.post('/', createTweet);
router.get('/', getAllTweets);
router.post('/like', likeTweet);
router.get('/:tweetId/likes', getTweetLikes);

export default router;
