const { Client } = require("pg") // PostgreSQL client
// PostgreSQL connection configuration
 const client = new Client({
  host: "host.docker.internal", // PostgreSQL host (use 'localhost' if running locally)
  port: 5432, // Default PostgreSQL port
  user: "dataverse", // PostgreSQL user (replace with your username)
  password: "dvnsecret", // PostgreSQL password (replace with your password)
  database: "db_dataverse", // Database name (replace with your database name)
});
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Error connecting to PostgreSQL:', err));

module.exports = client; // Export the client