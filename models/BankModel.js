import db, { pool } from "../config/db.js";

class Bank {
  // `id` int(11) NOT NULL,
  // `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  // `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  // `createdAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
  constructor(name, slug, content, img) {
    this.name = name;
    this.slug = slug;
    this.content = content;
    this.img = img;
  }

  save() {
    // let d = new Date();
    // let yyyy = d.getFullYear();
    // let mm = d.getMonth() + 1;
    // let dd = d.getDate();

    // let createdAtDate = `${yyyy}-${mm}-${dd}`;

    // let sql = `
    // INSERT INTO banks(
    //   name,
    //   slug,
    //   content,
    //   img
    // )
    // VALUES(
    //   '${this.name}',
    //   '${this.slug}',
    //   '${this.content}',
    //   '${this.img}'
    // )
    // `;
    let sql = `
    INSERT INTO banks(
      name,
      slug,
      content,
      img
    )
    VALUES(?,?,?,?)
    `;

    return db.query(sql, [this.name, this.slug, this.content, this.img]);
  }

  static findAll(filter) {
    let sql = "SELECT * FROM banks";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM banks WHERE id = ${id};`;

    return db.execute(sql);
  }
}

export default Bank;
