import express from 'express';

import Article from 'server/api/mongo';
import { NEWS_PER_PAGE } from 'client/constants';

import { buildSuccessResponse, errorHandler } from './helpers';

const router = express.Router();
router.use(errorHandler);

router.get('/', async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const total = await Article.estimatedDocumentCount();
  const diff = total - NEWS_PER_PAGE * page;
  const skip = diff < 0 ? 0 : diff;
  const itemsPerPage = diff < 0 ? NEWS_PER_PAGE * page - total : NEWS_PER_PAGE;
  Article
    .find({}, null)
    .skip(skip)
    .limit(itemsPerPage)
    .exec((err, articles) => {
      if (err) {
        next(err);
      }
      articles.reverse();
      res.status(200).send(JSON.stringify(buildSuccessResponse({ articles, total, page })));
    });
});

export default router;
