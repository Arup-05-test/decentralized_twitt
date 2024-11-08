"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = exports.Tweet = exports.User = exports.sequelize = void 0;
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Tweet_1 = __importDefault(require("./Tweet"));
exports.Tweet = Tweet_1.default;
const Like_1 = __importDefault(require("./Like"));
exports.Like = Like_1.default;
User_1.default.hasMany(Tweet_1.default);
Tweet_1.default.belongsTo(User_1.default);
Tweet_1.default.hasMany(Like_1.default);
Like_1.default.belongsTo(Tweet_1.default);
