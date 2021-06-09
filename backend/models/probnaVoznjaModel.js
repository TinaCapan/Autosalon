// import connection
import db from "../config/database.js";
 
// Get All Products
export const getProbnaVoznja = (result) => {
    db.query("SELECT * FROM Probna_voznja", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getProbnaVoznjaById = (id, result) => {
    db.query("SELECT * FROM Probna_voznja WHERE ID_voznje = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
export const insertProbnaVoznja = (data, result) => {
    db.query("INSERT INTO Probna_voznja SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateProbnaVoznjaById = (data, id, result) => {
    db.query("UPDATE Probna_voznja SET Termin = ?, ID_vozila = ?, ID_klijenta = ?", [data.Termin, data.ID_vozila, data.ID_klijenta, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteProbnaVoznjaById = (id, result) => {
    db.query("DELETE FROM Probna_voznja WHERE ID_voznje = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// dohvat termina iz baze
export const getTermin = (date, result) => {
    db.query("SELECT * FROM Termini WHERE Datum = ?", [date], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}