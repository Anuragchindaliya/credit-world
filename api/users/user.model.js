import db from "../../config/db.js";

class User {
  constructor({ name, email, password }) {
    this.info = {
      name,
      email,
      password,
    };
  }
  save() {
    const sql = `INSERT INTO users (name,email,password) VALUES(?,?,?)`;
    return db.query(sql, [...Object.values(this.info)]);
  }

  static checkExist(cause) {
    const condition = Object.keys(cause).reduce((acc, key) => {
      return `${acc} ${key}='${cause[key]}'`;
    }, "");
    const sql = `SELECT * FROM users WHERE${condition}`;
    return db.execute(sql);
  }
  static findAll(filter) {
    let sql = "SELECT * FROM users";
    if (!!filter) {
      sql += ` WHERE ${filter}`;
    }
    return db.execute(sql);
  }
}
export default User;
// export default {
//   create: (data, callBack) => {
//     pool.query(
//       `insert into registration(firstName, lastName, gender, email, password, number)
//                   values(?,?,?,?,?,?)`,
//       [
//         data.first_name,
//         data.last_name,
//         data.gender,
//         data.email,
//         data.password,
//         data.number,
//       ],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },
//   getUserByUserEmail: (email, callBack) => {
//     pool.query(
//       `select * from registration where email = ?`,
//       [email],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results[0]);
//       }
//     );
//   },
//   getUserByUserId: (id, callBack) => {
//     pool.query(
//       `select id,firstName,lastName,gender,email,number from registration where id = ?`,
//       [id],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results[0]);
//       }
//     );
//   },
//   getUsers: (callBack) => {
//     pool.query(
//       `select id,firstName,lastName,gender,email,number from registration`,
//       [],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },
//   updateUser: (data, callBack) => {
//     pool.query(
//       `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
//       [
//         data.first_name,
//         data.last_name,
//         data.gender,
//         data.email,
//         data.password,
//         data.number,
//         data.id,
//       ],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results[0]);
//       }
//     );
//   },
//   deleteUser: (data, callBack) => {
//     pool.query(
//       `delete from registration where id = ?`,
//       [data.id],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results[0]);
//       }
//     );
//   },
// };
