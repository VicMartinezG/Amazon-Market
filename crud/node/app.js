import express, { request, response } from 'express'
import cors from 'cors'
import db from './database/db.js'
import UserRouter from './routes/routes.js'


const stripe = require("stripe")('sk_test_51MS9IUCwc8NvWGNJzsJWc3sJBt0XY7WODPwDKdEENA5FXDLlXDLq9X3LBMfKzgPwwjhuJiRFJuhxvS8gIpSfXpXO00RyRvvhJx')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', UserRouter)

// - API Route
app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('Pago realizado con exito', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "pen",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//listen command
exports.api = functions.https.onRequest(app);

try {
    await db.authenticate()
    console.log("Conexion exitosa");
} catch (error) {
    console.log(`el error es : ${error}`);
}

app.listen(8000, ()=> {
    console.log("server run http://localhost:8000/");
})


