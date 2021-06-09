import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'ucka.veleri.hr',
  user: 'njurisic',
  password: '11',
  database: 'njurisic'
});
 
export default db;