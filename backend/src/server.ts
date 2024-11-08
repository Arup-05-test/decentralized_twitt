import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes'; // Assuming you have user routes

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Define a basic route for "/"
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Decentralized Twitter!');
});

// Use your defined routes
app.use('/api/users', userRoutes); // Example of route mounting

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
