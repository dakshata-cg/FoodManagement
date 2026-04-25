const express = require('express')
const colors = require('colors')
const app = express()
const port = 3000
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || port;
const testRoutes = require('./routes/testRoutes');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`.bgYellow.blue)
})
