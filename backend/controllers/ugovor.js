// Import function from Product Model
import { getUgovor, getUgovorById, insertUgovor, updateUgovorById, deleteUgovorById } from "../models/ugovorModel.js";
 
// Get All Products
export const showUgovor = (req, res) => {
    getUgovor((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showUgovorById = (req, res) => {
    getUgovorById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createUgovor = (req, res) => {
    const data = req.body;
    insertUgovor(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateUgovor = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateUgovorById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteUgovor = (req, res) => {
    const id = req.params.id;
    deleteUgovorById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}