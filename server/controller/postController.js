const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, desc, img, content, username } = req.body;
    const post = new Post({ title, desc, img, content, username });
    const savedPost = await post.save();

    res.status(200).json({
      success: true,
      post: savedPost,
      message: "Successfuly Created Post",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error While Creating Post",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      message: "Successfull Get All Posts",
      post: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error While Geting Post",
    });
  }
};

exports.getAllPostByUsername = async (req, res) => {
  const { username } = req.query;
  try {
    const posts = await Post.find({ username });

    res.status(200).json({
      success: true,
      message: "Successfull Get All Posts",
      post: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error While Geting Post",
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const id = req.params.id;

    const posts = await Post.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfull Get Post By Id",
      post: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error While Geting Post",
    });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const id = req.params.id;

    const post = await Post.findByIdAndDelete(id);

    const updatedPost = await Post.findByIdAndUpdate(id);

    res.status(200).json({
      success: true,
      message: "Successfull Deleted Post By Id",
      post: post,
      updatedPost: updatedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error While Deleting Post",
    });
  }
};
