import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import { MONGOOSE_CONNECTION_ERROR } from './constants';

export class DB {
  private static instance: DB;

  private constructor() {}

  static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }

    return DB.instance;
  }

  run = async () => {
    const mongod = new MongoMemoryServer();

    mongod.getConnectionString().then((mongoUri) => {
      const mongooseOpts = {
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    
      mongoose.connect(mongoUri, mongooseOpts);
    
      mongoose.connection.on('error', (e) => {
        if (e.message.code === MONGOOSE_CONNECTION_ERROR) {
          mongoose.connect(mongoUri, mongooseOpts);
        }

        console.error(e);
      });
    
      mongoose.connection.once('open', () => {
        console.log(`MongoDB successfully connected to ${mongoUri}`);
      });
    });
  }
}
