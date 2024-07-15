const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Goal = require('./models/goal');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/goals', async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json({
      goals: goals.map((goal) => ({
        id: goal.id,
        text: goal.text,
      })),
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load goals.' });
  }
});

app.post('/goals', async (req, res) => {
  const goalText = req.body.text;
  if (!goalText || goalText.trim().length === 0) {
    return res.status(422).json({ message: 'Invalid goal text.' });
  }

  const goal = new Goal({ text: goalText });
  try {
    await goal.save();
    res.status(201).json({ message: 'Goal saved', goal: { id: goal.id, text: goalText } });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save goal.' });
  }
});

app.delete('/goals/:id', async (req, res) => {
  try {
    await Goal.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Deleted goal!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete goal.' });
  }
});

mongoose.connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/${process.env.MONGODB_NAME}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error('FAILED TO CONNECT TO MONGODB');
    } else {
      console.log('CONNECTED TO MONGODB!!');
      app.listen(3000);
    }
  }
);
