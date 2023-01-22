'use strict'

const express = require('express');
let FavoritoController = require('../controllers/favoritosController');
let api = express.Router();

api.get('/prueba/:nombre?',FavoritoController.prueba);

api.get('/favorito/:id',FavoritoController.getFavorito);

api.post('/favorito',FavoritoController.saveFavorito);
api.put('/favorito',FavoritoController.updateFavorito);
api.delete('/favorito/:id',FavoritoController.deleteFavorito);

module.exports = api;