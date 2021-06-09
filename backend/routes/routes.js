// import express
import express from "express";
 
// import function from controller
import { showVozilo, showVoziloById, createVozilo, updateVozilo, deleteVozilo } from "../controllers/vozilo.js";
import { showKlijent, showKlijentById, createKlijent, updateKlijent, deleteKlijent } from "../controllers/klijent.js";
import { showProbnaVoznja, showProbnaVoznjaById, createProbnaVoznja, updateProbnaVoznja, deleteProbnaVoznja } from "../controllers/probnaVoznja.js";
import { showUpit, showUpitNovo, showUpitById, createUpit, updateUpit, deleteUpit } from "../controllers/upit.js";
import { showUgovor, showUgovorById, createUgovor, updateUgovor, deleteUgovor } from "../controllers/ugovor.js";
 
// init express router
const router = express.Router();
 
//Vozilo
router.get('/vozilo', showVozilo);
router.get('/vozilo/:id', showVoziloById);
router.post('/vozilo', createVozilo);
router.put('/vozilo/:id', updateVozilo);
router.delete('/vozilo/:id', deleteVozilo);
 
//Klijent
router.get('/klijent', showKlijent);
router.get('/klijent/:id', showKlijentById);
router.post('/klijent', createKlijent);
router.put('/klijent/:id', updateKlijent);
router.delete('/klijent/:id', deleteKlijent);

//Ugovor
router.get('/ugovor', showUgovor);
router.get('/ugovor/:id', showUgovorById);
router.post('/ugovor', createUgovor);
router.put('/ugovor/:id', updateUgovor);
router.delete('/ugovor/:id', deleteUgovor);

//upit
router.get('/upit', showUpit);
router.get('/upitnovo', showUpitNovo);
router.get('/upit/:id', showUpitById);
router.post('/upit', createUpit);
router.put('/upit/:id', updateUpit);
router.delete('/upit/:id', deleteUpit);

//probna
router.get('/probnaVoznja', showProbnaVoznja);
router.get('/probnaVoznja/:id', showProbnaVoznjaById);
router.post('/probnaVoznja', createProbnaVoznja);
router.put('/probnaVoznja/:id', updateProbnaVoznja);
router.delete('/probnaVoznja/:id', deleteProbnaVoznja);

// export default router
export default router;