// import connection
import db from "../config/database.js";
 
// Get All Products
export const getUpit = (result) => {
    db.query("SELECT * FROM Upit", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getUpitById = (id, result) => {
    db.query("SELECT * FROM Upit WHERE ID_upita = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
export const insertUpit = (data, result) => {
    db.query("INSERT INTO Upit SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateUpitById = (data, id, result) => {
    db.query("UPDATE Upit SET ID_vozila = ?, NovoVozilo = ?, Ime_prezime = ?, Kontakt = ?, OIB= ? WHERE ID_upita = ?", [data.ID_vozila, data.NovoVozilo, data.Ime_prezime, data.Kontakt, data.OIB, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteUpitById = (id, result) => {
    db.query("DELETE FROM Upit WHERE ID_upita = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}