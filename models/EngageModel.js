import db from "../config/db.js";

class Engage {
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
    INSERT INTO engage(
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
      return `${acc} ${key}='${cause[key]}'`;
    }, "");
    const sql = `SELECT * FROM engage WHERE${condition}`;
    return db.execute(sql);
  }
  static findAll(filter) {
    let sql = "SELECT * FROM engage";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }
  static findAllJOIN(filter) {
    let sql =
      "SELECT apps.*, banks.name as bankName FROM engage as apps INNER JOIN banks ON apps.bankId=banks.id";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    sql += " ORDER BY id DESC";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM engage WHERE id = ${id};`;

    return db.execute(sql);
  }
  static getCount() {
    const sql = "SELECT COUNT(*) FROM engage";
    return db.execute(sql);
  }
}

export default Engage;
