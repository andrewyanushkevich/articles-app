import express from 'express';
import articleRouter from './article';
import articlesRouter from './articles';


const router = express.Router();


router.use('/articles', articlesRouter);
router.use('/article', articleRouter);

export default router;
