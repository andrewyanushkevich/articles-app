const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '../.env' });

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@training-rm1po.mongodb.net/test?retryWrites=true`;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  console.log('Connected');
  const collection = client.db('articlesdb').collection('articles');
  client.close();
});
