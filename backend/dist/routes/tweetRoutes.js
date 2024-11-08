"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tweetController_1 = require("../controllers/tweetController");
const likeController_1 = require("../controllers/likeController");
const router = express_1.default.Router();
router.post('/', tweetController_1.createTweet);
router.get('/', tweetController_1.getAllTweets);
router.post('/like', likeController_1.likeTweet);
router.get('/:tweetId/likes', likeController_1.getTweetLikes);
exports.default = router;
