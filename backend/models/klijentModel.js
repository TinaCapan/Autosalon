// import connection
import db from "../config/database.js";
 
// Get All Products
export const getKlijent = (result) => {
    db.query("SELECT * FROM Klijent", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getKlijentById = (id, result) => {
    db.query("SELECT * FROM Klijent WHERE ID_klijenta = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
export const insertKlijent = (data, result) => {
    db.query("INSERT INTO Klijent SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateKlijentById = (data, id, result) => {
    db.query("UPDATE Klijent SET Ime_prezime_klijenta = ?, OIB_klijenta = ?, Kontakt = ?, Mail = ? WHERE ID_klijenta = ?", [data.Ime_prezime_klijenta, data.OIB_klijenta, data.Kontakt, data.Mail, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteKlijentById = (id, result) => {
    db.query("DELETE FROM Klijent WHERE ID_klijenta = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}