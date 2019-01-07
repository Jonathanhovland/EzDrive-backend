module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/connection"
  },
 
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
 };