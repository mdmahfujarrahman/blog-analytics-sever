import express from "express";
import { BlogsController } from "../modules/blog/blog.contraoller.js";

const router = express.Router();

router.get("/blog-stats", BlogsController.getBlogStats);
router.get("/blog-search", BlogsController.searchBlogs);

export default router;
