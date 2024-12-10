# Rentola - Real Estate Marketplace

Rentola is a modern real estate marketplace built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to browse, list, and manage real estate properties seamlessly.

## Features
- Browse real estate listings
- User authentication and profile management
- Add, edit, and delete property listings
- Search and filter properties
- Responsive and user-friendly design

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or later) - [Download Node.js](https://nodejs.org/)
- **MongoDB** (local or hosted database)
- **Git** - [Download Git](https://git-scm.com/)
- **Code Editor** (e.g., VSCode) - [Download VSCode](https://code.visualstudio.com/)

---

## Project Structure

The project is organized into two main directories:


---

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/rentola.git
cd rentola

cd server
npm install

cd ../client
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

REACT_APP_API_URL=http://localhost:5000/api

cd server
npm run dev

cd ../client
npm start

Technologies Used
Frontend: React, Redux, TailwindCSS/Bootstrap
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Deployment: (e.g., Vercel for frontend, Render/Heroku for backend)
