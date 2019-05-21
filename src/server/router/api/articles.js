import express from 'express';
import Article from '@server/api/mongo';
import { buildSuccessResponse, errorHandler } from './helpers';

// import NEWS_PER_PAGE from '@client/constants';

const router = express.Router();
router.use(errorHandler);

router.get('/', async (req, res, next) => {
  const page = req.query.page || 1;
  const itemsPerPage = req.query.itemsPerPage || 10;
  const total = await Article.estimatedDocumentCount();

  Article
    .find({}, null, { skip: (page - 1) * itemsPerPage, limit: itemsPerPage })
    .exec((err, articles) => {
      if (err) {
        next(err);
      }
      res.status(200).send(JSON.stringify(buildSuccessResponse({ articles, total, page })));
    });
});

export default router;
