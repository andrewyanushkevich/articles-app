import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

import Article from 'server/api/mongo';
import { SHORT_BODY_LETTERS_LIMIT, UPLOAD_PATH } from 'client/constants';

import {
  buildErrorResponse, buildSuccessResponse, errorHandler, checkUploadPath,
} from './helpers';

const router = express.Router();

const upload = multer({ dest: UPLOAD_PATH });
upload.array('article-image');

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

router.post('/', checkUploadPath, (req, res, next) => {
  const { title, detailedDescription } = req.body;
  const { files } = req;
  let image;
  if (typeof files !== 'undefined') {
    image = files.map(element => ({ url: element.destination, name: element.filename }));
  }
  const shortDescription = detailedDescription
    .split('.', SHORT_BODY_LETTERS_LIMIT)
    .reduce((result, element) => `${result + element}.`);
  const article = new Article({
    title, detailedDescription, shortDescription, createdAt: new Date(), unpdatedAt: new Date(), image,
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

  const { title, detailedDescription } = req.body;
  const shortDescription = detailedDescription
    .split('.', SHORT_BODY_LETTERS_LIMIT)
    .reduce((result, element) => `${result + element}.`);
  Article.findByIdAndUpdate(id,
    {
      title, detailedDescription, shortDescription, updated_at: new Date(),
    },
    { new: true }, (err, article) => {
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
