const request = require("supertest");
const app = require("../../server.js");

describe("Contact API", () => {
  it("should fetch all contacts", async () => {
    const res = await request(app).get("/contacts");
    expect(res.statusCode).toEqual(200);
  });

  it("should create a new contact", async () => {
    const res = await request(app).post("/contacts").send({
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
    });
    expect(res.statusCode).toEqual(201);
  });
});
