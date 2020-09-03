'use strict';

// Initialize express
const express = require('express');
const app = express();

// TODO: require and use "multer"...

// Import and enable CORS
const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));

// Set the public file directory
app.use('/public', express.static(process.cwd() + '/public'));

// Root endpoint. Display index file
app.get('/', (req, res) => res.sendFile(process.cwd() + '/views/index.html'));

// Display a temporary message at the GET /api/hello route
app.get('/hello', (req, res) => res.json({ greetings: 'Hello, API' }));

// Create a listener to handle requests
const listener = app.listen(process.env.PORT || 3000, () => console.log('Node.js listening on port ' + listener.address().port));
