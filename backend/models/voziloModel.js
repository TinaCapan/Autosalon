// import connection
import db from "../config/database.js";
 
// Get All Products
export const getVozilo = (result) => {
    db.query("SELECT * FROM Vozilo where Prodan=0", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getVoziloById = (id, result) => {
    db.query("SELECT * FROM Vozilo WHERE ID_vozila = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
export const insertVozilo = (data, result) => {
    db.query("INSERT INTO Vozilo SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateVoziloById = (data, id, result) => {
    db.query("UPDATE Vozilo SET Marka_model_vozila = ?, Vrsta_motora = ?, Snaga_motora = ?, Radni_obujam = ?, Godina_proizvodnje = ?, Broj_prijedenih_kilometara = ?, Cijena_vozila = ? WHERE ID_vozila = ?", [data.Marka_model_vozila, data.Vrsta_motora, data.Snaga_motora, data.Radni_obujam, data.Godina_proizvodnje, data.Broj_prijedenih_kilometara, data.Cijena_vozila, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 //prodano
 export const updateVoziloProdano = (id, result) => {
    db.query("UPDATE Vozilo SET Prodan=1 WHERE ID_vozila = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 //
// Delete Product to Database
export const deleteVoziloById = (id, result) => {
    db.query("DELETE FROM Vozilo WHERE ID_vozila = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}