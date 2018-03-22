const express = require('express');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || 8080;
const PUBLIC_DIR = path.join(process.cwd(), 'dist');

const app = express();
app.use(express.static(PUBLIC_DIR));
app.listen(PORT, () => console.log(`Server is running on port "${PORT}".`));
