const { Post } = require('../models');

const postData = [
  {
    title: 'Model',
    post_text: 'Model updates the view for users in the MVC paradigm',
    user_id: 1,
  },
  {
    title: 'Controller',
    post_text: 'The controller files can manipulates the model data.',
    user_id: 2,
  },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;