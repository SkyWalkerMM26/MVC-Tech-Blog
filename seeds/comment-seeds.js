const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Wow! ",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "This is amazing!",
    post_id: 1,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;