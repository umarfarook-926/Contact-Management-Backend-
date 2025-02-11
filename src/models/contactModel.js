const db = require("../config/db");

class ContactModel {
  static getAll(callback) {
    db.all("SELECT * FROM contacts", [], callback);
  }

  static getById(id, callback) {
    db.get("SELECT * FROM contacts WHERE id = ?", [id], callback);
  }

  static create(contact, callback) {
    const { name, email, phone, address } = contact;
    db.run(
      `INSERT INTO contacts (name, email, phone, address) VALUES (?, ?, ?, ?)`,
      [name, email, phone, address],
      function (err) {
        callback(err, { id: this.lastID, ...contact });
      }
    );
  }

  static update(id, contact, callback) {
    const { name, email, phone, address } = contact;
    db.run(
      `UPDATE contacts SET name=?, email=?, phone=?, address=? WHERE id=?`,
      [name, email, phone, address, id],
      callback
    );
  }

  static delete(id, callback) {
    db.run("DELETE FROM contacts WHERE id=?", [id], callback);
  }


}

module.exports = ContactModel;

