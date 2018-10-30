const { Pool, Client } = require("pg");
const connectionString =
  "postgresql://postgres:postgres@gustavodb.cqjm2sakfywf.us-east-2.rds.amazonaws.com:5432/postgres";

const pool = new Pool({
  connectionString: connectionString
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
