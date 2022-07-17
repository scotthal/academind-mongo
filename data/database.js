const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database = null;

const connect = async () => {
  if (!process.env.MONGODB_PASSWORD) {
    console.error("Set MONGODB_USERNAME and MONGODB_PASSWORD!");
    process.exit(-1);
  }

  const client = await MongoClient.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongo`
  );

  database = client.db("blog");
};

const getDb = () => {
  if (!database) {
    console.error("No database connection!");
    process.exit(-1);
  }
  return database;
};

module.exports = {
  connect: connect,
  getDb: getDb,
};
