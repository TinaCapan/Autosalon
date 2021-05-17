// import connection
import db from "../config/database.js";
 
// Get All Products
export const getUgovor = (result) => {
    db.query("SELECT * FROM Ugovor", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getUgovorById = (id, result) => {
    db.query("SELECT * FROM Ugovor WHERE ID_ugovora = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
export const insertUgovor = (data, result) => {
    db.query("INSERT INTO Ugovor SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateUgovorById = (data, id, result) => {
    db.query("UPDATE Ugovor SET ID_klijenta = ?, ID_vozila = ?, Datum_ugovora = ? WHERE ID_ugovora = ?", [data.ID_klijenta, data.ID_vozila, data.Datum_ugovora, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteUgovorById = (id, result) => {
    db.query("DELETE FROM Ugovor WHERE ID_Ugovora = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}