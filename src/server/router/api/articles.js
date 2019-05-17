import express from 'express';
import Article from '@server/api/mongo';
import { buildErrorResponse, buildSuccessResponse, errorHandler } from './helpers';

const router = express.Router();
router.use(errorHandler);

router.get('/', (req, res, next) => {
  const page = req.query.page || 1;
  const itemsPerPage = req.query.itemsPerPage || 10;
  Article
    .find({}, null, { skip: (page - 1) * itemsPerPage, limit: itemsPerPage })
    .exec((err, articles) => {
      if (err) {
        next(err);
      }
      res.status(200).send(JSON.stringify(buildSuccessResponse(articles)));
    });
});

export default router;
