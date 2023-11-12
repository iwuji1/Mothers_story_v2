const { BigQuery } = require('@google-cloud/bigquery');
const projectId = 'your-project-id'; // Replace with your Google Cloud Project ID

exports.handler = async function (event, context) {
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
};
