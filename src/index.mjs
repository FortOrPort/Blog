import Handlebars from 'handlebars';
import hbs from "hbs";

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    res.render('home');
})

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
})