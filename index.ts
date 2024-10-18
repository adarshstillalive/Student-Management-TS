// src/app.ts
import express from 'express';
import path from 'path';
import studentRoutes from './src/routes/studentRoutes';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', studentRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => { console.error(err.stack); res.status(500).send('Something went wrong!'); });

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`) 
  });
