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
  constructor(name, contact, email, subject, body, cardId) {
    this.name = name;
    this.contact = contact || "";
    this.email = email;
    this.subject = subject;
    this.body = body;
    this.cardId = cardId;
  }

  save() {
    const sql = `
    INSERT INTO subscribers(
        name,
        contact,
        email,
        subject,
        body,
        cardId
    )
    VALUES(?,?,?,?,?,?)
    `;

    return db.query(sql, [
      this.name,
      this.contact,
      this.email,
      this.subject,
      this.body,
      this.cardId,
    ]);
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
