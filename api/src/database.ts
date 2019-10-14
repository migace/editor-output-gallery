import { MongoMemoryServer } from 'mongodb-memory-server';

export class DB {
  private static instance;

  private constructor() {}

  static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }

    return DB.instance;
  }

  run = async () => {
    const mongod = new MongoMemoryServer();
  
    const uri = await mongod.getConnectionString();
    const port = await mongod.getPort();
    const dbPath = await mongod.getDbPath();
    const dbName = await mongod.getDbName();
  }
}
