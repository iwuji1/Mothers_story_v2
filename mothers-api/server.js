const express = require('express');
const { BigQuery } = require('@google-cloud/bigquery');
const cors = require('cors');
const app = express();
const bigquery = new BigQuery();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/api/query-results', async (req, res) => {
  try {
    // Check the BigQuery API connection by sending a test query
    const sqlQueries = [
      'SELECT * FROM our-access-404113.Data_export.EthB_dat',
      'SELECT * FROM our-access-404113.Data_export.Gender_dat',
      'SELECT * FROM our-access-404113.Data_export.age_gen_dat',
    ];

    // Execute the BigQuery query
    const results = [];
    for (const sqlQuery of sqlQueries) {
      const [rows] = await bigquery.query(sqlQuery);
      results.push(rows);
    }

    // Convert the rows to JSON
    const jsonData = results.map((rows) => rows.map((row) => row));

    // Send the JSON data as the response
    res.json(jsonData);
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
