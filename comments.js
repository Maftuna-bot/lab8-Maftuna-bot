// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const comments = [
  { id: 1, text: 'First comment' },
  { id: 2, text: 'Second comment' }
];

// Create route to handle GET requests to /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create route to handle POST requests to /comments
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    text: req.body.text
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});