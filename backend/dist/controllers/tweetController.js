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
exports.getAllTweets = exports.createTweet = void 0;
const Tweet_1 = __importDefault(require("../models/Tweet"));
const Like_1 = __importDefault(require("../models/Like"));
const createTweet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, userId } = req.body;
    try {
        const tweet = yield Tweet_1.default.create({ content, userId });
        res.status(201).json(tweet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating tweet' });
    }
});
exports.createTweet = createTweet;
const getAllTweets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tweets = yield Tweet_1.default.findAll({ include: [{ model: Like_1.default }] });
        res.json(tweets);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching tweets' });
    }
});
exports.getAllTweets = getAllTweets;
