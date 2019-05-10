import express from 'express';

const pathAlias = require('path-alias');
const ObjectId = require('mongodb').ObjectID;

const Article = pathAlias('src/server/api/mongo');
const router = express.Router();


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Article.findOne({ _id: id }, (err, article) => {
    if (err) return console.log(err);
    res.send(article);
  });
});

router.post('/', (req, res) => {
  const { title, body } = req.body;
  const article = new Article({
    title, body, createdAt: new Date(), unpdatedAt: new Date(),
  });

  article.save((err, newArticle) => {
    if (err) return console.log(err);
    res.send(newArticle);
  });
});

router.put('/:id', (req, res) => {
  const id = new ObjectId(req.body.id);
  const { title, body } = req.body;
  Article.findByIdAndUpdate(id, { title, body, updated_at: new Date() }, (err, article) => {
    if (err) return console.log(err);
    res.send(article);
  });
});

router.delete('/id', (req, res) => {
  const { id } = req.params;
  Article.findByIdAndDelete(id, (err, article) => {
    if (err) return console.log(err);
    res.send(article);
  });
});

export default router;
