import express from 'express';
import Article from 'server/api/mongo';
import bodyParser from 'body-parser';

import { buildErrorResponse, buildSuccessResponse, errorHandler } from './helpers';

const router = express.Router();
router.use(errorHandler);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  if (typeof id === 'undefined') {
    res.status(400).send(buildErrorResponse('Article identifier is missed'));
  }

  Article.findOne({ _id: id }, (err, article) => {
    if (err) {
      next(err);
    }

    if (typeof article === 'undefined') {
      res.status(404).send(buildErrorResponse('Article is not found'));
    }

    res.status(200).send(buildSuccessResponse(article));
  });
});

router.post('/', (req, res, next) => {
  const { title, body } = req.body;
  const article = new Article({
    title, body, createdAt: new Date(), unpdatedAt: new Date(),
  });

  article.save((err, newArticle) => {
    if (err) {
      next(err);
    }

    res.status(200).send(buildSuccessResponse(newArticle));
  });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  if (typeof id === 'undefined') {
    res.status(400).send(buildErrorResponse('Article identifier is missed'));
  }

  const { title, body } = req.body;
  Article.findByIdAndUpdate(id, { title, body, updated_at: new Date() }, (err, article) => {
    if (err) {
      next(err);
    }

    if (typeof article === 'undefined') {
      res.status(400).send(buildErrorResponse('Article identifier is missed'));
    }

    res.status(200).send(buildSuccessResponse(article));
  });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  if (typeof id === 'undefined') {
    res.status(400).send(buildErrorResponse('Article identifier is missed'));
  }

  Article.findByIdAndDelete(id, (err, article) => {
    if (err) {
      next(err);
    }

    if (typeof article === 'undefined') {
      res.status(400).send(buildErrorResponse('Article identifier is missed'));
    }

    res.status(200).send(buildSuccessResponse(article));
  });
});

export default router;
