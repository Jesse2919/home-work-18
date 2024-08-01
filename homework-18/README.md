# Social Network API

## Description
This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The API is built using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Installation
1. Clone the repository
    ```sh
    git clone <repository-url>
    cd social-network-api
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Start the server
    ```sh
    npm run start
    ```

## Usage
Use Insomnia to test the API routes.

## API Routes

### Users
- GET /api/users: Get all users
- GET /api/users/:userId: Get a single user by its _id and populated thought and friend data
- POST /api/users: Create a new user
- PUT /api/users/:userId: Update a user by its _id
- DELETE /api/users/:userId: Remove a user by its _id
- POST /api/users/:userId/friends/:friendId: Add a new friend to a user's friend list
- DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list

### Thoughts
- GET /api/thoughts: Get all thoughts
- GET /api/thoughts/:thoughtId: Get a single thought by its _id
- POST /api/thoughts: Create a new thought
- PUT /api/thoughts/:thoughtId: Update a thought by its _id
- DELETE /api/thoughts/:thoughtId: Remove a thought by its _id
- POST /api/thoughts/:thoughtId/reactions: Create a reaction stored in a single thought's reactions array field
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Pull and remove a reaction by the reaction's reactionId value

## Walkthrough Video
[Link to walkthrough video](#)
