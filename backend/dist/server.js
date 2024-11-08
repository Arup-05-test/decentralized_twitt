"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Assuming you have user routes
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Define a basic route for "/"
app.get('/', (req, res) => {
    res.send('Welcome to Decentralized Twitter!');
});
// Use your defined routes
app.use('/api/users', userRoutes_1.default); // Example of route mounting
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
