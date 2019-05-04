import express from 'express';
import Article from '../../api/mongo';

const ObjectId = require('mongodb').ObjectID;
const router = express.Router();


router.get('/api/article/:id', (req, res) => {
  const { id } = req.params;
  Article.findOne({ _id: id }, (err, article) => {
    if (err) return console.log(err);
    res.send(article);
  });
});

router.post('/api/article', (req, res) => {
  const { title } = req.body;
  const { body } = req.body;
  const article = new Article({
    title, body, createdAt: new Date(), unpdatedAt: new Date(),
  });

  article.save((err, newArticle) => {
    if (err) throw err;
    res.send(newArticle);
  });
});

router.put('/api/article/:id', (req, res) => {
  const id = new ObjectId(req.body.id);
  const { title } = req.body;
  const { body } = req.body;
  Article.findByIdAndUpdate(id, { title, body, updated_at: new Date() }, (err, article) => {
    if (err) throw err;
    res.send(article);
  });
});

router.delete('/api/article/id', (req, res) => {
  const { id } = req.params;
  Article.findByIdAndDelete(id, (err, article) => {
    if (err) throw err;
    res.send(article);
  });
});

export default router;
