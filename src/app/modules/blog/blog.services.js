import axios from "axios";
import config from "../../config/index.js";
import _ from "lodash";

/**
 * @description Fetch blog stats
 * @returns {blogs} blogs: array
 */
const fetchBlogStats = _.memoize(async () => {
    const response = await axios.get(config.BLOG_URL, {
        headers: {
            "x-hasura-admin-secret": config.TOKEN,
        },
    });

    return response?.data?.blogs;
});

/**
 * @description Get blog stats
 * @returns {totalBlogs, longestTitle, privacyBlogs, uniqueTitles} response: object
 */

const getBlogStats = async () => {
    const blogs = await fetchBlogStats();
    const totalBlogs = blogs.length;
    const longestTitle = _.maxBy(blogs, "title.length");
    const privacyBlogs = _.filter(blogs, (blog) =>
        blog.title.toLowerCase()?.includes("privacy")
    ).length;
    const uniqueTitles = _.uniqBy(blogs, "title");
    return {
        totalBlogs,
        longestTitle,
        privacyBlogs,
        uniqueTitles,
    };
};

/**
 * @description Search blogs by title
 * @param {query} query: string
 * @returns {searchResults} searchResults: array
 */

const searchBlogs = async (query) => {
    const blogs = await fetchBlogStats();
    const searchResults = _.filter(blogs, (blog) =>
        blog.title.toLowerCase()?.includes(query.toLowerCase())
    );
    return searchResults;
};

export const BlogsService = {
    getBlogStats,
    searchBlogs,
};
