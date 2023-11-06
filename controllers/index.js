const router = require('express').Router();

const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const homeRoutes = require('./home-routes')

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/home');

module.exports = router;
