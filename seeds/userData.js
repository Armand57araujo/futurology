const { User } = require('../models');


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




const seedUser = () => User.bulkCreate(data);

module.exports = seedUser;