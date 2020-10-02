const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  'sk_test_51HT4zTGpUIWuk6riaE79Wk60cVFuCJs7mYx3mNMh5IN6G1phgGJqBcjQpNLdj7ddwPu4xXup86GDOnDmqWyJZ2ga0027lTMa3G')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send('Hello World'));


// - Listen command
exports.api = functions.https.onRequest(app);


app.post("/payments/create", async (request, response) => {
 const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


//Example end Point 
// http://localhost:5001/clone-dd52b/us-central1/api