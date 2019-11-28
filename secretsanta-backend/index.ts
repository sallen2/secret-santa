import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import User from './database/models/User';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
	const data = await User.find();
	res.send(data);
});

app.post('/', async (req: Request, res: Response) => {
	const db = await User.create(req.body);
});

app.post('/senduser', (req, res) => {
	// randomize user emails
	// push into array
	// loop through array and send email for each index
	// use aws ses to send emails
});

app.put('users', (req, res) => {
	// update secret santa item
});

app.listen(PORT, async () => {
	console.log(`listening on ${PORT}`);
	try {
		await mongoose.connect('mongodb://localhost:27017/secretsanta', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('db connection successful!');
	} catch (e) {
		console.log('error with db!');
	}
});
