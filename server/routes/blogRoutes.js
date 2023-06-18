const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPost,
  getPostById,
  deletePostById,
  getAllPostByUsername,
} = require("../controller/postController");

router.post("/createpost", createPost);
router.get("/getpost", getAllPost);
router.get("/getpostbyusername", getAllPostByUsername);
router.get("/getpost/:id", getPostById);
router.delete("/getpost/:id", deletePostById);

module.exports = router;
