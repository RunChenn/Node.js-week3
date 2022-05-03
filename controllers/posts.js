const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');
const Post = require('../models/postsModel');

const posts = {
  async getPosts(req, res) {
    const post = await Post.find();
    handleSuccess(res, post);
  },
  async createdPosts(req, res) {
    try {
      const { body } = req;
      const newPost = await Post.create(body);
      body.content ? handleSuccess(res, newPost) : handleError(res, 400, '參數有誤');
    } catch (err) {
      handleError(res, 400, err.message);
    }
  },
  async deletePosts(req, res) {
    const newPost = await Post.deleteMany({});
    handleSuccess(res, newPost);
  },
  async deletePost(req, res) {
    try {
      const newPost = await Post.findByIdAndDelete(req.params.id);
      newPost ? handleSuccess(res, newPost) : handleError(res, 400, '此筆ID已經刪除過');
    } catch (err) {
      handleError(res, 400, err.message);
    }
  },
  async updatePosts(req, res) {
    try {
      const { body } = req;
      const newPost = await Post.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
      newPost ? handleSuccess(res, newPost) : handleError(res, 400, '查無此ID');
    } catch (err) {
      handleError(res, 400, err.message);
    }
  },
};

module.exports = posts;
