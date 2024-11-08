"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTweetLikes = exports.likeTweet = void 0;
const Like_1 = __importDefault(require("../models/Like"));
const likeTweet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tweetId, userId } = req.body;
    try {
        const like = yield Like_1.default.create({ tweetId, userId });
        res.status(201).json(like);
    }
    catch (error) {
        res.status(500).json({ message: 'Error liking tweet' });
    }
});
exports.likeTweet = likeTweet;
const getTweetLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tweetId } = req.params;
    try {
        const likes = yield Like_1.default.findAll({ where: { tweetId } });
        res.json(likes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching likes' });
    }
});
exports.getTweetLikes = getTweetLikes;
