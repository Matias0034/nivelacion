// !Dependencies
import express from 'express';
import Boom from '@hapi/boom';
import cors from 'cors';
import helmet from 'helmet';
import actuator from 'express-actuator';
import debug from 'debug';


// ?SRC
import { initRoutes } from './src/routes/Index';
import sequelize from './src/Utils/db';
import { errorHandler } from './src/Utils/ErrorHandler';


const { json, urlencoded } = express;
const APP = express();

const PORT = process.env.PORT || 8080;

APP.use(cors({
	origin: '*'
}));
APP.use(json());
APP.use(urlencoded());

//?Security middleware
APP.use(helmet());

initRoutes(APP);

APP.use(errorHandler);
APP.use(actuator());

APP.set('port', process.env.PORT);
const server = APP.listen(PORT, () => {
	console.log('Server is running on port ' + PORT);

	console.log(`Visit the api documentation in http://localhost:${PORT}/docs`);

	sequelize.authenticate()
		.then(() => { console.log('Database Connected'); })
		.catch((err) => { throw Boom.preconditionRequired('Has ocurred an error trying connect to database', err); });

});

//?Graceful shutdown
/* When you deploy a new version of your application, you must replace the previous version. 
The process manager you’re using (PM2) will first send a SIGTERM signal to the application to notify 
it that it will be killed. Once the application gets this signal, it should stop accepting new requests, 
finish all the ongoing requests, clean up the resources it used, 
including database connections and file locks then exit.*/
process.on('SIGTERM', () => {
	debug('SIGTERM signal received: closing HTTP server');
	server.close(() => {
		debug('HTTP server closed');
	});
});
