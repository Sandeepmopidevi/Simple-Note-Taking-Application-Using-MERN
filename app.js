const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

const notesRouter = require('./routes/note');
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Note-Taking App API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
