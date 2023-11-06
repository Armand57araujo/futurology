const { Post } = require('../models');

const data = [
  {
    title: 'Introduction to JavaScript Promises',
    content: 'JavaScript Promises are used for asynchronous programming. A promise represents the eventual result of an asynchronous operation...',
    author: 'John Doe',
    created_at: 'April 20, 2021 07:00:00',
  },
  {
    title: 'Getting Started with React Hooks',
    content: 'React Hooks provide a way to use state and other React features without writing a class. They were introduced in React 16.8...',
    author: 'Jane Doe',
    created_at: 'June 22, 2021 09:00:00',
  },
  {
    title: 'Understanding RESTful APIs',
    content: 'RESTful APIs are an architectural style for designing networked applications. They use HTTP requests to perform CRUD operations...',
    author: 'John Smith',
    created_at: 'September 23, 2021 08:30:00',
  },
  {
    title: 'Web Development Best Practices',
    content: 'In this article, we will discuss some best practices for web development. These practices can help improve the performance...',
    author: 'Jane Smith',
    created_at: 'December 22, 2020 11:00:00',
  },
];

const seedPost = () => Post.bulkCreate(data);

module.exports = seedPost;
