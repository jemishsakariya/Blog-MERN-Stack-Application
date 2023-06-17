# Blog MERN Stack Application

This is a full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create, read, update, and delete blog posts. It also includes user authentication and authorization features.

## Features

- User registration and login
- Create, read, and delete blog posts
- Contact Us Mail API using Nodemailer
- Light and Dark Theme
- Lazy Loading and Suspense
- Pagination
- Error handling and validation

## Technologies Used

- MongoDB: NoSQL database for storing blog posts and user information.
- Express.js: A web application framework for Node.js that provides a robust set of features for web and mobile applications.
- React.js: A JavaScript library for building user interfaces.
- Node.js: A runtime environment for executing JavaScript code server-side.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository: `git clone [repository URL]`
2. Install dependencies: `npm install`
3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables and provide the necessary values:
     ```env
     PORT=4000
     MONGODB_URI=mongodb://127.0.0.1:27017/blog
     MAIL_HOST=your-mail-host
     MAIL_USER=your-mail-user
     MAIL_PASS=your-mail-password
     ```
4. Start the development server:
   ```sh
   nodemon run dev - OR - npm start
   ```
