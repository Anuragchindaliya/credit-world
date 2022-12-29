import db from "../config/db.js";

class Subs {
  // `subId` INT NOT NULL AUTO_INCREMENT ,
  // `name` VARCHAR(255) NOT NULL ,
  // `contact` VARCHAR(20) NOT NULL ,
  // `email` VARCHAR(255) NOT NULL ,
  // `subject` VARCHAR(255) NOT NULL ,
  // `body` TEXT NOT NULL ,
  // `cardId` INT NOT NULL ,
  // `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,

  constructor({
    name,
    contact,
    email,
    subject,
    body,
    message,
    cardId,
    pincode,
    salary,
    ITR,
    crLimitMin,
    crLimitMax,
    cardUser = "0",
  }) {
    this.info = {
      name: name,
      contact: contact || null,
      email: email,
      subject: subject || null,
      body: body || null,
      message: message || null,
      cardId: cardId,
      pincode: pincode || null,
      salary: salary || null,
      ITR: ITR || null,
      crLimitMin: crLimitMin || null,
      crLimitMax: crLimitMax || null,
      cardUser,
    };
  }

  save() {
    const sql = `
    INSERT INTO subscribers(
        name,
        contact,
        email,
        subject,
        body,
        message,
        cardId,
        pincode,
        salary,
        itr,
        crLimitMin,
        crLimitMax,
        cardUser
    )
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)
    `;

    return db.query(sql, [...Object.values(this.info)]);
  }

  static findAll(filter) {
    let sql = "SELECT * FROM subscribers";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM subscribers WHERE subId = ${id};`;

    return db.execute(sql);
  }
}

export default Subs;
