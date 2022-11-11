/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Infrastructure
import { Users  } from '../Modules/Users/Infrastructure/Routes/EndPoints';
import { Emails  } from '../Modules/Emails/Infrastructure/Routes/EndPoints';
import { Health } from '../Utils/HealthCheck/EndPoints';

import docs from './doc';

// !Dependencies
import swaggerUi from 'swagger-ui-express';

export function initRoutes(instance: any){
	instance.use('/users',  new Users().init());
	instance.use('/emails',  new Emails().init());
	instance.use('/check',  new Health().init());
	instance.use('/docs',  swaggerUi.serve, swaggerUi.setup(docs));
}

