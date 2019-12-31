const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let fakeTodos = [
  {
    item: 'H',
    priority: '1',
    id: 0
  },
  {
    item: 'E',
    priority: '2',
    id: 1
  },
  {
    item: 'L',
    priority: '3',
    id: 2
  }
];

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/api/TodoItems', (req, res) => {
  res.status(200).send(fakeTodos);
});

app.post('/api/TodoItems', (req, res) => {
  fakeTodos.push(req.body);
  res.status(201).send(req.body);
});

app.delete('/api/TodoItems/:id', (req, res) => {
  console.log(req.params.id);
  // console.log(fakeTodos);
  console.log(fakeTodos[req.params.id]);
  if (fakeTodos[req.params.id]) {
    const newFakeTodos = fakeTodos.filter(todo => todo.id !== Number(req.params.id));
    fakeTodos = newFakeTodos;
    res.status(200).send(fakeTodos[req.params.id]);
  } else {
    res.status(400).send('This todo doesn\'t exist.');
  }
});

module.exports = app;
