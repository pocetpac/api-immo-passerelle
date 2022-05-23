import 'dotenv/config';
import express from 'express';


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


import apiRoutes from './api/routes.mjs';
app.use('/api', apiRoutes);

//Error handling function global
app.use(function(err, req, res, next) {
    res.status(500).send({ message: 'Something went wrong' });
})


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port : http://localhost:${process.env.SERVER_PORT}`);
} )