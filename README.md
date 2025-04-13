# SubTrack

**SubTrack** is a simple and scalable REST API for tracking user subscriptions. Built with **Express.js** and **MongoDB**, it provides endpoints for managing users, authentication, and subscription plans.

## Features

- User authentication routes
- CRUD operations for users and subscriptions
- Cancel and fetch upcoming renewals
- Environment-based configuration
- Modular route structure


## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/firogute/SubTrack.git
cd subtrack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your .env.development.local

```env
PORT=7000
DB_URI=your_mongodb_connection_string
NODE_ENV=development
```

### 4. Run the server

```bash
npm run dev
```

Server runs at: [http://localhost:7000](http://localhost:7000)

