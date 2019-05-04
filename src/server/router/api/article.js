const router = require('express').Router();
import { collection } from '../../index';

router.post('/v1/article', (req, res) => {
    const { title } = req.body;
    const { body } = req.body;
    const article = {
        title, body, createdAt: new Date(), unpdatedAt: new Date(),
    };

    collection.insertOne(article, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(article));
    });
})

router.put('/v1/articles/:id', (req, res) => {
    const id = new ObjectId(req.body.id);
    const { title } = req.body;
    const { body } = req.body;
  
    collection.findOneAndUpdate({ _id: id },
      { $set: { title, body, unpdatedAt: new Date() }, returnOriginal: false }, (err, result) => {
        if (err) throw err;
        const article = result.value;
        res.send(article);
      });
  });

export default router