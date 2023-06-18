const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/cdac';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const app = express();

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API endpoint to get all users
//   app.get('/api/users', (req, res) => {
//     const collection = client.db().collection('users');
//     collection.find().toArray((err, users) => {
//       if (err) {
//         console.error('Error retrieving users:', err);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }
//       res.json(users);
//     });
//   });

//   // API endpoint to create a new user
  app.post('/api/users', (req, res) => {
    const collection = client.db().collection('users');
    const newUser = req.body;

    collection.insertOne(newUser, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.status(201).json(result.ops[0]);
    });
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});
