const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPost,
  getPostById,
} = require("../controller/postController");

router.post("/createpost", createPost);
router.get("/getpost", getAllPost);
router.get("/getpost/:id", getPostById);

module.exports = router;
