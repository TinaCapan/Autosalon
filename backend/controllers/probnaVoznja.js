// Import function from Product Model
import { getProbnaVoznja, getProbnaVoznjaById, insertProbnaVoznja, updateProbnaVoznjaById, deleteProbnaVoznjaById } from "../models/probnaVoznjaModel.js";
 
// Get All Products
export const showProbnaVoznja = (req, res) => {
    getProbnaVoznja((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showProbnaVoznjaById = (req, res) => {
    getProbnaVoznjaById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createProbnaVoznja = (req, res) => {
    const data = req.body;
    insertProbnaVoznja(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateProbnaVoznja = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProbnaVoznjaById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteProbnaVoznja = (req, res) => {
    const id = req.params.id;
    deleteProbnaVoznjaById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}