import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import groupRoutes from './routes/groups.js';
import lolGroupRoutes from './routes/lolGroups.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/groups', groupRoutes);
app.use('/lolGroups', lolGroupRoutes);
app.use('/user', userRoutes);

// const CONNECTION_URL = 'mongodb+srv://admin:admin18012000@cluster0.abfrcfd.mongodb.net/';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message) );