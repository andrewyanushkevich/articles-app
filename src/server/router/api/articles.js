import express from 'express';
import Article from '../../api/mongo';

const router = express.Router();

router.get('/api/articles/?page=p&itemsPerPage=i', (req, res) => {
  const { page } = req.params || 1;
  const { itemsPerPage } = req.params || 5;
  const list = Article.find({});
  res.send(list.slice((page - 1) * itemsPerPage, page * itemsPerPage));
});

export default router;
