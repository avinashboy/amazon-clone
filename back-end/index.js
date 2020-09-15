const express = require("express");
const helmet = require("helmet")
const cors = require("cors");
const user = require('./key');
const stripe = require("stripe")(`${user.getName()}`);
const port = process.env.PORT || 3000 

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.use(helmet())

// - API routes
app.get("/", (request, response) => response.status(200).send("hello worldsss"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    description: "stripe integration testing"
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
app.listen(port, console.log(`working on ${port}`))

