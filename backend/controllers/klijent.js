// Import function from Product Model
import { getKlijent, getKlijentById, insertKlijent, updateKlijentById, deleteKlijentById } from "../models/klijentModel.js";
 
// Get All Products
export const showKlijent = (req, res) => {
    getKlijent((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showKlijentById = (req, res) => {
    getKlijentById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createKlijent = (req, res) => {
    const data = req.body;
    insertKlijent(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateKlijent = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateKlijentById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const deleteKlijent = (req, res) => {
    const id = req.params.id;
    deleteKlijentById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}