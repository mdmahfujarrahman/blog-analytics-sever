# Blog Analytics Express Server

This is an Express.js server that serves as the backend for a blog analytics and search tool. It provides two main endpoints: `/api/blog-stats` for blog statistics and `/api/blog-search` for searching blogs.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Usage](#usage)
-   [Endpoints](#endpoints)
    -   [GET `/api/blog-stats`](#get-apiblog-stats)
    -   [GET `/api/blog-search`](#get-apiblog-search)
-   [API Documentation](#api-documentation)
    -   [Postman Documentation](#postman-documentation)

## Getting Started

### Installation

To run this server locally, follow these installation steps:

1. Clone this repository:

    ```bash
    git clone <repository-url>
    cd express-blog-analytics-server

    ```

2. Install the required dependencies:
    ```bash
    yarn install
    ```

### Usage

To start the Express server, run the following command:

    yarn start

The server will be running at http://localhost:5000 by default.

## Usage

### GET /api/blog-stats

-   This endpoint retrieves statistics about blogs.
-   Example request:

    GET http://localhost:3000/api/blog-stats

-   Example response:
    ```bash
     {
        "totalBlogs": 100,
        "longestTitle": {
            "id": "1627f364-559c-46cf-a03a-04d185bacb3a",
            "image_url": "https://cdn.subspace.money/whatsub_services/backdrop_url/Q1g1nRYpHbA48ngIPX6nA.png",
            "title": "After 24 days at the box office, Sunny Deol's action film Gadar 2 became the second Hindi film to gross over ₹500 crore"
        }
        "privacyBlogs": 25,
        "uniqueTitles": [
            {
                "id": "4b66e146-6da5-46e4-8a0e-2b40c0f13b0a",
                "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
                "title": "Privacy policy"
            },
             {
                "id": "8f2ffbf6-4058-47cd-800b-8c65f25fdf3c",
                "image_url": "https://cdn.subspace.money/whatsub_blogs/q.png",
                "title": "Top 5 ways to save money on Subscriptions"
            },
            "..."
        ]
    }
    ```

### GET /api/blog-search

-   This endpoint allows you to search for blogs based on a query string.

-   Example request:

    GET http://localhost:3000/api/blog-search?query=policy

-   Example response

        ```bash
        {
            "success": true,
            "message": "Blogs fetched successfully",
            "result": {
                "total": 10,
                "data": [
                    {
                        "id": "4b66e146-6da5-46e4-8a0e-2b40c0f13b0a",
                        "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
                        "title": "Privacy policy"
                    },
                    {
                        "id": "ff4d5dd3-a276-4c5d-a054-5d058070d700",
                        "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
                        "title": "Pricing Policy"
                    },
                    ..
                ]
            }

        }

    ```

    ```

## API Documentation

### Postman Documentation

For detailed information about the available endpoints, request parameters, and response structures, refer to the [API Documentation](https://documenter.getpostman.com/view/23551025/2s9YJaZ4nf) on Postman.
