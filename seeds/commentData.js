const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Great introduction to Promises!',
    author: 'TechEnthusiast123',
    post_id: 1,
  },
  {
    content: 'I found React Hooks very helpful in simplifying state management.',
    author: 'ReactRocks',
    post_id: 2,
  },
  {
    content: 'RESTful APIs are the backbone of modern web applications.',
    author: 'APIGuru',
    post_id: 3,
  },
  {
    content: 'These web development best practices are crucial for performance optimization.',
    author: 'WebDevMaster',
    post_id: 4,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
