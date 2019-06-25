import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

import Article from 'server/api/mongo';
import {
  SHORT_BODY_LETTERS_LIMIT, UPLOAD_FOLDER, UPLOAD_PATH, DOMAIN_NAME,
} from 'client/constants';

import {
  buildErrorResponse, buildSuccessResponse, errorHandler, checkUploadPath,
} from './helpers';

const router = express.Router();

const storage = multer.diskStorage({
  destination: `${UPLOAD_PATH}`,
  filename: (req, file, cb) => {
    const fileExtension = file.originalname
      .substring(file.originalname
        .lastIndexOf('.'), file.originalname.length);
    cb(null, `${Date.now()}.${fileExtension}`);
  },
});

const upload = multer({ storage });

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

router.post('/', upload.array('images', 5), (req, res, next) => {
  const { title, detailedDescription } = req.body;
  const { files } = req;
  const url = `http://${DOMAIN_NAME}/${UPLOAD_FOLDER}/`;
  const images = files.length === 0
    ? []
    : files.map(element => ({ url: url + element.filename, name: element.filename }));
  const article = new Article({
    title,
    detailedDescription,
    shortDescription: `${detailedDescription.slice(0, SHORT_BODY_LETTERS_LIMIT)}...`,
    createdAt: new Date(),
    unpdatedAt: new Date(),
    images,
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
  const shortDescription = `${detailedDescription.slice(0, SHORT_BODY_LETTERS_LIMIT)}...`;
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
