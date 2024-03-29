import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';
import pg, { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  (req as any).pool = pool;
  next();
})

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })

})

app.listen(process.env.PORT, () => console.log("SERVER ONLINE :)"))