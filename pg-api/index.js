const { response, request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

 
//Get all Todos

app.get("/savantData", async (request, response) => {
  try {
    const allSavantData = await pool.query("SELECT * from savantData");
    response.json(allSavantData.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/savantData/:playerId", async (request,response) => {
  try {
    const {playerId} = request.params;
    console.log(playerId);
    const savantDataById = await pool.query("SELECT * FROM savantData WHERE playerId = $1", [playerId]);
    response.json(savantDataById.rows[0]);
  } catch (err) {
    console.error(err.message);
    
  }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});