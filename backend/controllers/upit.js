// Import function from Product Model
import { getUpit, getUpitById, insertUpit, updateUpitById, deleteUpitById } from "../models/upitModel.js";
 
// Get All Products
export const showUpit = (req, res) => {
    getUpit((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showUpitById = (req, res) => {
    getUpitById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createUpit = (req, res) => {
    const data = req.body;
    insertUpit(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateUpit = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateUpitById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteUpit = (req, res) => {
    const id = req.params.id;
    deleteUpitById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}