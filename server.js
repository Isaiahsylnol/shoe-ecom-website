const express = require('express')

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests
const stripe = require("stripe")("")

// Controllers - aka, the db queries
const main = require('./src/controllers/main')
const { config } = require('dotenv')

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : process.env.REACT_APP_PG_USER,
    password : process.env.REACT_APP_PG_PASS,
    database : process.env.REACT_APP_DB_NAME
  }
});

// App
const app = express()

// App Middleware
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'

// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))
app.get('/crud', (req, res) => main.getTableData(req, res, db))
app.post('/crud', (req, res) => main.postTableData(req, res, db))
app.post('/checkout', async (req, res) =>{
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await 
    stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
      amount: product.price * 100,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email, 
      description: `Purchased the $ 
    {product.name}`,
    shipping: { name: token.card.name, 
    address:{ line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
    }
  }
  },
  {
    idempotency_key
  }
    );
    console.log("charge:", {cahrge});
    status = "success";
  } catch (error){
    console.error("Error:", error);
    status = "failure";
  }

  res.json({error, status});
} );

app.put('/crud', (req, res) => main.putTableData(req, res, db))
app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})
