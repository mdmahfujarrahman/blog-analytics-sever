import ApiErros from "../../shared/ApiErrors.js";
import { catchAsync } from "../../shared/catchAsync.js";
import { BlogsService } from "./blog.services.js";

/**
 * @description Get blog stats
 * @returns {totalBlogs, longestTitle, privacyBlogs, uniqueTitles} response: object
 */
const getBlogStats = catchAsync(async (req, res, next) => {
    const response = await BlogsService.getBlogStats();

    res.status(200).json({
        success: true,
        message: "Blog stats fetched successfully",
        result: response,
    });
});

/**
 * @description Search blogs by title
 * @param {query} query: string
 * @returns {searchResults} searchResults: array
 */
const searchBlogs = catchAsync(async (req, res, next) => {
    const { query } = req.query;
    if (!query) {
        throw new ApiErros(400, "Please provide a query to search blogs");
    }
    const response = await BlogsService.searchBlogs(query);
    res.status(200).json({
        success: true,
        message: "Blogs fetched successfully",
        result: response,
    });
});

export const BlogsController = {
    getBlogStats,
    searchBlogs,
};
