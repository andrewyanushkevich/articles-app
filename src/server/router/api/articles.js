import express from 'express';
import Article from '@server/api/mongo';
import { buildErrorResponse, buildSuccessResponse, errorHandler } from './helpers';

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
        next(err);
      }

      if (articles.length === 0) {
        res.status(404).send(buildErrorResponse('Articles are not find'));
      }

      res.status(200).send(buildSuccessResponse(articles));
    });
});

export default router;
