const express = require('express');
const router = express.Router();
const defaultController = require('./../controllers/defaultController');

router.all('/*', (req, res, next)=> {
    req.app.locals.layout = 'default';
    next();
})


router.route('/')
    .get(defaultController.index);

router.route('/login')
    .get(defaultController.loginGET)
    .post(defaultController.loginPOST);

router.route('/register')
    .get(defaultController.registerGET)
    .post(defaultController.registerPOST);


module.exports = router;