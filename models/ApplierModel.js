import db from "../config/db.js";

class Applier {
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
    INSERT INTO applier(
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

  static findAll(filter) {
    let sql = "SELECT * FROM applier";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }
  static findAllJOIN(filter) {
    let sql =
      "SELECT apps.*, banks.name as bankName FROM applier as apps INNER JOIN banks ON apps.bankId=banks.id";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM applier WHERE id = ${id};`;

    return db.execute(sql);
  }
}

export default Applier;
