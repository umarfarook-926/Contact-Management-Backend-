📞 Contact Management App - Backend
A simple RESTful API for managing contacts using Node.js, Express.js, and SQLite.

🚀 Features
✅ Create, Read, Update, and Delete (CRUD) contacts
✅ SQLite database for data storage
✅ Input validation using express-validator
✅ Search contacts by name or email
✅ Error handling for invalid inputs and missing data
✅ Unit testing with Jest & Supertest

🛠 Tech Stack
Backend: Node.js, Express.js
Database: SQLite
Validation: express-validator
Testing: Jest, Supertest
🔧 Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up the Database
The application uses SQLite. A database file (contacts.db) will be created automatically when the server runs.

4️⃣ Start the Server
sh
Copy
Edit
npm start
The server runs at: http://localhost:5000

5️⃣ Run Unit Tests
sh
Copy
Edit
npm test
📂 Project Structure
bash
Copy
Edit
contact-management-app/
│── config/
│   ├── db.js               # Database configuration
│── controllers/
│   ├── contactController.js  # Handles API logic
│── models/
│   ├── contactModel.js      # Contact schema & queries
│── routes/
│   ├── contactRoutes.js     # API routes
│── tests/
│   ├── contact.test.js      # Unit tests
│── server.js                # Main server file
│── package.json             # Dependencies & scripts
│── README.md                # Project documentation
❌ Error Handling
The API handles errors efficiently:

Status Code	Error Type	Description
400	Bad Request	Missing required fields or invalid format
404	Not Found	Contact not found
500	Internal Server Error	Unexpected errors
✅ Data Validation
Validation is handled using express-validator:

name → must not be empty
email → must be a valid email format
phone → must have at least 10 digits
📌 Database Choice
SQLite was chosen for simplicity, but it can easily be replaced with MongoDB or PostgreSQL.

🧪 Unit Testing
Unit tests are written using Jest and Supertest.

Example Test (tests/contact.test.js):

javascript
Copy
Edit
const request = require("supertest");
const app = require("../server");

describe("GET /contacts", () => {
  it("should return all contacts", async () => {
    const res = await request(app).get("/contacts");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
📡 API Documentation
👉 Postman API Docs




📡 API Documentation Link https://documenter.getpostman.com/view/39206130/2sAYX9oLpu
