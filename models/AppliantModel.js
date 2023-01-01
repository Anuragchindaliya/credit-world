import db from "../config/db.js";

class Applicant {

  constructor({ name, contact, email, pincode, salary, ITR, cardUser = "0" }) {
    this.info = {
      name: name,
      contact: contact || null,
      email: email,
      pincode: pincode || null,
      salary: salary || null,
      ITR: ITR || null,
      cardUser,
    };
  }

  save() {
    const sql = `
    INSERT INTO applicants(
        name,
        contact,
        email,
        pincode,
        salary,
        ITR,
        cardUser
    )
    VALUES(?,?,?,?,?,?,?)
    `;

    return db.query(sql, [...Object.values(this.info)]);
  }

  static findAll(filter) {
    let sql = "SELECT * FROM applicants";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }
  static findAllJOIN() {
    let sql =
      "SELECT apps.*, banks.name as bankName FROM applicants as apps INNER JOIN banks ON apps.bankId=banks.id;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM applicants WHERE id = ${id};`;

    return db.execute(sql);
  }
}

export default Applicant;
