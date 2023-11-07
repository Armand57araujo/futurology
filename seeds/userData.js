const { User } = require('./User');


const data = [
    {
      username: 'testuser1',
      email: 'test@test.com',
      password: '123456',

    },
    {
      username: 'testuser2',
      email: 'test@test.com',
      password: '123456',

    },
    {
      username: 'testuser3',
      email: 'test@test.com',
      password: '123456',

    },
    {
      username: 'testuser4',
      email: 'test@test.com',
      password: '123456',

    },
  ];




const seedPost = () => User.bulkCreate(data);

module.exports = seedPost;