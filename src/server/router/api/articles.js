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

router.get('/api/articles', (req, res, next) => {
  const { page } = req.params || 1;
  const { itemsPerPage } = req.params || 5;
  Article
    .find({}, null, { skip: (page - 1) * itemsPerPage })
    .limit(itemsPerPage)
    .exec((err, articles) => {
      if (err) {
        console.log(err);
        next(err);
      }

      errorRes.error = 'No articles were found!';
      if (articles.length === 0) {
        res.status(404).send(errorRes);
      }

      succesRes.data = articles;
      res.status(200).send(succesRes);
    });
});

export default router;
