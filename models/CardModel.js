import db, { pool } from "../config/db.js";

class Card {
  // `id` int(11) NOT NULL,
  // `bankId` int(11) NOT NULL,
  // `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  // `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  // `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
  constructor(bankId, name, img, content, slug) {
    this.bankId = bankId;
    this.name = name;
    this.img = img;
    this.content = content;
    this.slug = slug;
  }

  async save() {
    // let d = new Date();
    // let yyyy = d.getFullYear();
    // let mm = d.getMonth() + 1;
    // let dd = d.getDate();

    // let createdAtDate = `${yyyy}-${mm}-${dd}`;

    // let sql = `
    // INSERT INTO cards(
    //   bankId,
    //   name,
    //   img,
    //   content,
    //   slug
    // )
    // VALUES(
    //   '${this.bankId}',
    //   '${this.name}',
    //   '${this.img}',
    //   '${this.content}',
    //   '${this.slug}',
    // )
    // `;

    let sql = `
    INSERT INTO cards(
      bankId,
      name,
      img,
      content,
      slug
    )
    VALUES(?,?,?,?,?)`;

    return db.execute(sql, [
      this.bankId,
      this.name,
      this.img,
      this.content,
      this.slug,
    ]);
  }

  static findAll(filter) {
    let sql = "SELECT * FROM cards";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }

  static findById(id) {
    const sql = `SELECT * FROM cards WHERE id = ${id};`;

    return db.execute(sql);
  }
  static getCount() {
    const sql = "SELECT COUNT(*) FROM cards";
    return db.execute(sql);
  }
}

export default Card;
