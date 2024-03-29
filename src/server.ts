import express, { Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';
import './database';

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('Servidor online no link: http://localhost:3333');
  console.log('API Docs no link: http://localhost:3333/api-docs');
});

app.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'Servidor On-line!!!',
  });
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);
