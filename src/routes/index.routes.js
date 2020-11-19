const {Router} = require('express')  // Requiero express 
const router = Router();    //Devuelve objeto y lo almaceno con el mismo nombre


const { renderIndex, renderSvc } = require('../controllers/index.controller') //Importo las funciones del archivo controller

router.get('/', renderIndex);

router.get('/svc', renderSvc);


module.exports = router; 