const mongoose = require('mongoose');

const { Schema } = mongoose;
require('dotenv').config({ path: './.env' });

const articleSchema = new Schema({
  title: String,
  detailedDescription: String,
  shortDescription: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  image: [{ name: String, url: String }],
});

const Article = mongoose.model('Article', articleSchema);
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@training-rm1po.mongodb.net/test?retryWrites=true`;

mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false }, (err) => {
  if (err) return console.log(err);
  console.log('Connection');
});

module.exports = Article;
