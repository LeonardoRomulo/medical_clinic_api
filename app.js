import express from 'express';
import medicosRouters from './Routers/medicosRouters.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(medicosRouters);

app.listen( 9000, () => {
    const date = new Date ();
    console.log(`Servidor iniciado em: ${date}`);
})