import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import dotenv from 'dotenv'
import testRouter from './routes/test/testRoutes.js';
import { handleAllErrors, notFoundErrors } from './middlewares/errorHandlers.js';

dotenv.config()

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/test', testRouter);

// catch 404 and forward to error handler
app.use(notFoundErrors);

// error handler
app.use(handleAllErrors);

export default app
