const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI || "mongodb://admin:1234@127.0.0.1:27017",
};

module.exports = config;
