// Import function from Product Model
import { getVozilo, getVoziloById, insertVozilo, updateVoziloById, deleteVoziloById } from "../models/voziloModel.js";
 
// Get All Products
export const showVozilo = (req, res) => {
    getVozilo((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showVoziloById = (req, res) => {
    getVoziloById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createVozilo = (req, res) => {
    const data = req.body;
    insertVozilo(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateVozilo = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateVoziloById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteVozilo = (req, res) => {
    const id = req.params.id;
    deleteVoziloById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}