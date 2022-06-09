import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from './routes/user-routes'

//Swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import {options} from './swaggerOptions'


// variables
const app = express();

//midleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// define a route handler for the default home page
app.use(userRoutes);

// define a route for swagger
const specs = swaggerJsDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;