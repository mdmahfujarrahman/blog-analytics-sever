import dotenv from "dotenv";
import path from "path";
dotenv.config({
    path: path.resolve(process.cwd(), ".env"),
});

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    BLOG_URL: process.env.BLOG_URL,
    TOKEN: process.env.TOKEN,
};
