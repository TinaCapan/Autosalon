import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'ucka.veleri.hr',
  user: 'tcapan',
  password: '11',
  database: 'tcapan'
});
 
export default db;