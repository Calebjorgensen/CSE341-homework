const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');


routes.get('/', lesson1Controller.calebRoute );
routes.get('/elle', lesson1Controller.elleRoute );

module.exports = routes;