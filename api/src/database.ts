import { MongoMemoryServer } from 'mongodb-memory-server';

const run = async () => {
  const mongod = new MongoMemoryServer();

  const uri = await mongod.getConnectionString();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();
}

module.exports = {
  run,
};
