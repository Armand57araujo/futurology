const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// The `/api/posts` endpoint

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Comment, include: [{ model: User }]}]
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [{ model: Comment, include: [{ model: User }]}]
    });
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    // const newPost = await Post.create(req.body);
    const newPost = await Post.create({...req.body, user_id: req.session.user_id});
    res.status(201).json(newPost);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'Unable to create post' });
  }
});

router.post('/post', (req, res) => {
  console.log(newPost)
  const newPost = new Post({
      title: req.body.title,
      body: req.body.content,
  });
  

  newPost.save((err) => {
      if (err) {
          console.error(err);
          res.status(500).send('Error creating post');
      } else {
          res.redirect('/dashboard');
      }
  });
});

router.put('/:id', async (req, res) => {
  try {
    const [updatedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows === 0) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedRows = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedRows === 0) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;