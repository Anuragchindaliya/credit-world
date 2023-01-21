import db from "../config/db.js";

class Applicant {
  constructor({
    name,
    contact,
    email,
    pincode,
    salary,
    ITR,
    cardUser = "0",
    bankId,
  }) {
    this.info = {
      name: name,
      contact: contact || null,
      email: email,
      pincode: pincode || null,
      salary: salary || null,
      ITR: ITR || null,
      cardUser,
      bankId,
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
        cardUser,
        bankId
    )
    VALUES(?,?,?,?,?,?,?,?)
    `;

    return db.query(sql, [...Object.values(this.info)]);
  }
  static checkExist(cause) {
    const condition = Object.keys(cause).reduce((acc, key) => {
      return `${acc} ${key}='${cause[key]}'`
    }, "");
    const sql = `SELECT * FROM applicants WHERE${condition}`;
    return db.execute(sql);
  }
  static findAll(filter) {
    let sql = "SELECT * FROM applicants";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }
  static findAllJOIN(filter) {
    let sql =
      "SELECT apps.*, banks.name as bankName FROM applicants as apps INNER JOIN banks ON apps.bankId=banks.id ORDER BY id DESC";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM applicants WHERE id = ${id};`;

    return db.execute(sql);
  }
}

export default Applicant;
