const { User } = require('../models');

const userData = [
  {
    username: "Kill Bill",
    email: "killbill@gmail.com",
    password: "password"
  },
  {
    username: "Bob",
    email: "bobthebuilder@gmail.com",
    password: "password"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;