/*
path: api/login

*/

const { Router } = require('express');
const { check } = require('express-validator');

const { crearUsuario, login, renewToken} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
],crearUsuario);

router.post('/', [
    check('email', 'El correo existe en database' ),
    check('password', 'El password existe en database' ),
], login );

// validarJWT
router.get('/renew', validarJWT, renewToken);

module.exports = router;

