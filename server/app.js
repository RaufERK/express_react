const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static('../client/public'))

const data = [
  { text: 'teststststs' },
  { text: '32232332' },
  { text: 'tests43433443tststs' },
  { text: 'te34334ststststs' },
  { text: 'te34343ststststs' },
  { text: 'teststststs' },
];

app.get('/', (req, res) => {
  res.json({ test: 'test' });
});

app
  .route('/api/')
  .get((req, res) => {
    res.json({ data });
  })
  .post((req, res) => {
    const { text } = req.body;
    data.push({ text });
    res.json({ data });
  })
  .put((req, res) => {
    const { text } = req.body;
    data.push({ text });
    res.json({ data });
  })
  .delete((req, res) => {
    res.json({ data });
  });

app.listen(8080, () => console.log('SERVER RUNNIG!!'));
