require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect DB

require('./config/db.config');

const app = express();

// Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas

const projectRoutes = require('./routes/project.routes');
const authRoutes = require('./routes/auth.routes');

// Rotas Publicas
app.use('/auth', authRoutes);


app.use('/projects', projectRoutes);


// exportar o meu app

module.exports = app;
