const {Router} = require('express')  // Requiero enrutador 
const router = Router();    //Devuelve objeto y lo almaceno con el mismo nombre

const{renderSignInForm,renderSignUpForm,signin, signup,logout} = require('../controllers/users.controller')

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSignInForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router; 