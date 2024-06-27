# Note Taking Application Using MERN Stack

This project is a basic note-taking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, read, update, and delete notes.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/note-taking-app.git
   cd note-taking-app
   ```

2. **Backend Setup:**

   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add your MongoDB URI:
     ```plaintext
     MONGODB_URI=mongodb://localhost:27017/Notes
     ```
   - Start the backend server:
     ```bash
     node app.js
     ```

3. **Frontend Setup:**

   - Open a new terminal window/tab and navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Accessing the Application:**

   - Open your web browser and go to `http://localhost:3000` to use the note-taking application.

## Features

- **Create Notes:** Add new notes with a title and content.
- **Read Notes:** View all notes currently stored.
- **Update Notes:** Edit existing notes.
- **Delete Notes:** Remove notes from the list.

## Technologies Used

- **Frontend:** React.js, Axios for API calls
- **Backend:** Node.js, Express.js, MongoDB Atlas (or local MongoDB)
- **Styling:** CSS for basic UI design

## Folder Structure

- **`backend/`**: Contains Node.js server files.
- **`client/`**: Contains React.js frontend files.

## Additional Notes

- Ensure MongoDB is running either locally or using MongoDB Atlas for cloud-based storage.
- Adjust the MongoDB URI in the `.env` file based on your setup (local or cloud).
