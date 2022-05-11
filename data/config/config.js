module.exports = {
  development: {
    username: "postgres",
    password: "password",
    database: "form_be",
    host: "form.c5nwnoxb5tkt.ap-southeast-3.rds.amazonaws.com",
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
