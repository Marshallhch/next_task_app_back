const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(require('./routes/getRoutes'));
app.use(require('./routes/postRoutes'));
app.use(require('./routes/deleteRoutes'));
app.use(require('./routes/putRoutes'));

app.listen(3001, () => console.log('Server running on port 3001'));
