const ContactModel = require("../models/contactModel");
const { validationResult } = require("express-validator");

exports.getContacts = (req, res) => {
  ContactModel.getAll((err, rows) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(rows);
  });
};

exports.getContactById = (req, res) => {
  ContactModel.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!row) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(row);
  });
};

exports.createContact = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  ContactModel.create(req.body, (err, newContact) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json(newContact);
  });
};

exports.updateContact = (req, res) => {
  ContactModel.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "Contact updated successfully" });
  });
};

exports.deleteContact = (req, res) => {
  ContactModel.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json({ message: "Contact deleted successfully" });
  });
};


