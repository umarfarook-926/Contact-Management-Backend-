Contact Management App - Backend 
A simple RESTful API for managing contacts using Node.js, Express.js, and SQLite.

Features 🚀
✔️ Create, read, update, and delete (CRUD) contacts
✔️ SQLite database for data storage
✔️ Input validation using express-validator
✔️ Search contacts by name or email
✔️ Error handling for invalid inputs and missing data
✔️ Unit testing with Jest & Supertest

Tech Stack 🛠️
Backend: Node.js, Express.js
Database: SQLite
Validation: express-validator
Testing: Jest, Supertest


Installation & Setup 🔧
1. Clone the Repository
git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app

2. Install Dependencies
npm install

3. Set Up the Database
The application uses SQLite. A database file contacts.db will be created automatically when the server runs.

4. Start the Server
npm start
Server runs on http://localhost:5000

5. Run Unit Tests
npm test


🛠 Project Structure
contact-management-app/
│── config/
│   ├── db.js          # Database configuration
│── controllers/
│   ├── contactController.js  # Handles API logic
│── models/
│   ├── contactModel.js  # Contact schema & queries
│── routes/
│   ├── contactRoutes.js  # API routes
│── tests/
│   ├── contact.test.js  # Unit tests
│── server.js  # Main server file
│── package.json  # Dependencies & scripts
│── README.md  # Project documentation



📌 Error Handling
400 Bad Request: When missing required fields or invalid data format
404 Not Found: If a contact is not found
500 Internal Server Error: For unexpected errors

📌 Data Validation
Used express-validator to validate:
name must not be empty
email must be valid
phone must be at least 10 digits

📌 Database Choice
SQLite was chosen for simplicity, but it can be easily replaced with MongoDB or PostgreSQL.

🧪 Unit Testing
Unit tests are written in Jest and Supertest.

Example Test (tests/contact.test.js)


📡 API Documentation Link https://documenter.getpostman.com/view/39206130/2sAYX9oLpu