import mongoose, {Mongoose} from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection{
    conn : Mongoose | null;
    promise : Promise<Mongoose> | null;
}

let cached : MongooseConnection = (global as any).cached;

if(!cached){
    cached = (global as any).mongoose = {
        conn: null,
        promise : null
    }
}

export const connectToDatabase = async () => {
    if(cached.conn){
        return cached.conn;
    }

    if(!MONGODB_URI){
        throw new Error("No MongoDB URI provided");
    }

    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URI , {
            dbName: 'restoremagic',
            bufferCommands: false,
        }
    )

    cached.conn = await cached.promise;

    return cached.conn;
    
}