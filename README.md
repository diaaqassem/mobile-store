<p align="center">
  <a href="https://nodejs.org/en/" target="blank"><img src="https://th.bing.com/th/id/R.d42672d4d185739d26257ed5c653c740?rik=dvh0VB%2fEWz20hQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png&ehk=bMmyN3n62enzXql6L4A5EzHc90tJxK%2bKcr6GMACTfRk%3d&risl=&pid=ImgRaw&r=0" width="200" alt="Node.js Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nodejs/node/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nodejs/node

<p align="center">A fast, unopinionated, and minimalist <a href="https://nodejs.org/en/" target="_blank">Node.js</a> framework for building web applications and APIs with <a href="https://expressjs.com/" target="_blank">Express</a>.</p>
<p align="center">
<a href="https://www.npmjs.com/package/express" target="_blank"><img src="https://img.shields.io/npm/v/express.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/express" target="_blank"><img src="https://img.shields.io/npm/l/express.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/express" target="_blank"><img src="https://img.shields.io/npm/dm/express.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nodejs/node" target="_blank"><img src="https://img.shields.io/circleci/build/github/nodejs/node/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nodejs/node?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nodejs/node/badge.svg?branch=master" alt="Coverage" /></a>
<a href="https://discord.gg/nodejs" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/expressjs#backer" target="_blank"><img src="https://opencollective.com/expressjs/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/expressjs#sponsor" target="_blank"><img src="https://opencollective.com/expressjs/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/nodejs" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/expressjs#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nodejs" target="_blank"><img src="https://img.shields.io/twitter/follow/nodejs.svg?style=social&label=Follow"></a>
</p>





# mobile-store
This project is a **Mobile Store** built with **Express** and **MongoDB**. It allows users to browse products, place orders, and view product images. Admins can manage products and users.
# Mobile Store API

This project is a **Mobile Store** built with **Express** and **MongoDB**. It allows users to browse products, place orders, and view product images. Admins can manage products and users.

## Features
- User authentication and authorization
- CRUD operations for products (Create, Read, Update, Delete)
- Order management
- Image upload for products
- API structured with RESTful design

## Technologies Used
- **Express**: Backend framework for building the API
- **MongoDB**: NoSQL database for storing products, users, and orders
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB
- **JWT**: For handling authentication
- **Multer**: For handling file uploads (product images)

## Getting Started
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud-based such as MongoDB Atlas)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/diaaqassem/mobile-store.git

##create .env file # PORT = 3000

# connect mongodb
DB_URL = "mongodb://127.0.0.1:27017/mobile-store"

SECRET_KEY = ""

JWT_COOKIE_EXPIRES = 7 * 24 * 60 * 60 * 1000

2.Install dependencies:
  npm install

3.Set up your MongoDB connection. You can either use a local MongoDB instance or set up a cloud-based MongoDB Atlas account.

4.Run the development server:
  npm run dev
