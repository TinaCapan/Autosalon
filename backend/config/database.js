import mysql from "mysql2";
  
const db = mysql.createConnection({
  host: 'ucka.veleri.hr',
  user: 'njurisic',
  password: '11',
  database: 'njurisic',
  timezone: '+00:00'
});
 
export default db;