import express from 'express';
import articleRouter from './article';
import articlesRouter from './articles';
import { ARTICLE_URL, ARTICLES_URL } from 'client/constants';

const router = express.Router();


router.use(`${ARTICLES_URL}`, articlesRouter);
router.use(`${ARTICLE_URL}`, articleRouter);

export default router;
