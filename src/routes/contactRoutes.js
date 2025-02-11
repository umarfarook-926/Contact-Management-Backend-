const express = require("express");
const { body } = require("express-validator");
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  searchContacts,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/", getContacts);
router.get("/:id", getContactById);
router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("phone").isLength({ min: 10 }).withMessage("Phone number must be at least 10 digits"),
  ],
  createContact
);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);


module.exports = router;
