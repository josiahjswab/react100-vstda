const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

const fakeTodos = [
  {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];

// app.get('/', (req, res) => {
//   res.status(200).send(fakeTodos);
// });

// app.get('/api/TodoItems', (req, res) => {
//   res.status(200).send(fakeTodos);
// });

module.exports = app;
