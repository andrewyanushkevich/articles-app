import express from 'express';
import Article from '@server/api/mongo';

const errorRes = {
  data: null,
  status: 'ERROR',
};

const succesRes = {
  error: null,
  status: 'OK',
};

function errorHandler(err, res, req, next) {
  errorRes.error = 'Something went wrong! Try again later.';
  res.status(500).send(errorRes);
}

const router = express.Router();
router.use(errorHandler);

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  if (id === undefined) {
    errorRes.error = 'Bad request! Check article id!';
    res.status(400).send(errorRes);
  }

  Article.findOne({ _id: id }, (err, article) => {
    if (err) {
      console.log(err);
      next(err);
    }

    if (article === undefined) {
      errorRes.error = 'Cannot find article!';
      res.status(404).send(errorRes);
    }

    succesRes.data = article;
    res.status(200).send(succesRes);
  });
});

router.post('/', (req, res, next) => {
  const { title, body } = req.body;
  const article = new Article({
    title, body, createdAt: new Date(), unpdatedAt: new Date(),
  });

  article.save((err, newArticle) => {
    if (err) {
      console.log(err);
      next(err);
    }

    succesRes.data = newArticle;
    res.status(200).send(succesRes);
  });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  if (id === undefined) {
    errorRes.error = 'Bad request! Check article id!';
    res.status(400).send(errorRes);
  }

  const { title, body } = req.body;
  Article.findByIdAndUpdate(id, { title, body, updated_at: new Date() }, (err, article) => {
    if (err) {
      console.log(err);
      next(err);
    }

    if (article === undefined) {
      errorRes.error = 'Bad request! Check article id!';
      res.status(400).send(errorRes);
    }

    succesRes.data = article;
    res.status(200).send(succesRes);
  });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  if (id === undefined) {
    errorRes.error = 'Bad request! Check article id!';
    res.status(400).send(errorRes);
  }

  Article.findByIdAndDelete(id, (err, article) => {
    if (err) {
      console.log(err);
      next(err);
    }

    if (article === undefined) {
      errorRes.error = 'Bad request! Check article id!';
      res.status(400).send(errorRes);
    }

    succesRes.data = article;
    res.status(200).send(succesRes);
  });
});

export default router;
