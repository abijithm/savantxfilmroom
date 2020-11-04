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
    const allSavantData = await pool.query("SELECT * FROM savantData WHERE sl_avg_spin IS NOT NULL ORDER BY sl_avg_spin DESC limit 20");
    response.json(allSavantData.rows);
    console.log(allSavantData.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/savantData/:playerId", async (request,response) => {
  try {
    const {playerId} = request.params;
    console.log(playerId);
    const savantDataById = await pool.query("SELECT * from savantData WHERE playerId = $1",[playerId]);
    response.json(savantDataById.rows[0]);
  } catch (err) {
    console.error(err.message);
    
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});


// Kershaw pitcher name filter
// https://www.mlb.com/video/search?utm=club-film-room&q=Player+%3D+%5B%22Clayton+Kershaw%22%5D+Order+By+Timestamp+DESC
// Kershaw and Bauer name filter
// https://www.mlb.com/video/search?utm=club-film-room&q=Player+%3D+%5B%22Clayton+Kershaw%22%2C%22Trevor+Bauer%22%5D+Order+By+Timestamp+DESC
// Kershaw and Bauer name filter, then pitch result = called strike filter
// https://www.mlb.com/video/search?utm=club-film-room&q=Player+%3D+%5B%22Clayton+Kershaw%22%2C%22Trevor+Bauer%22%5D+AND+PitchResult+%3D+%5B%22called_strike%22%5D+Order+By+Timestamp+DESC
// pitch type = 4 seam fastball filter
// https://www.mlb.com/video/search?q=PitchType+%3D+%5B%22FF%22%5D+Order+By+Timestamp+DESC
// pitch type = 4 seam fastball filter and Kershaw pitcher name filter
// https://www.mlb.com/video/search?q=PitchType+%3D+%5B%22FF%22%5D+AND+Player+%3D+%5B%22Clayton+Kershaw%22%5D+Order+By+Timestamp+DESC

 