const express = require('rexpress');
const db = require('./config/connection');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb:/localhost:27018/facenotes',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.set('debug', true);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });