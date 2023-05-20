import mongoose from "mongoose";

/**
 * status
 * 0 - disconnected
 * 1 - connected
 * 2 - connecting
 * 3 -disconnected
 */
const { MONGO_CONNECT_DEV_URL, MONGO_CONNECT_URL, NODE_ENV } = process.env;
let mongooseConnection = {
  isConnected: 0,
};
const url =
  NODE_ENV === "development" ? MONGO_CONNECT_DEV_URL : MONGO_CONNECT_URL;
export const connect = async () => {
  if (mongooseConnection.isConnected) {
    console.log("Connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    mongooseConnection.isConnected = mongoose.connections[0].readyState;
    if (mongooseConnection.isConnected == 1) {
      return;
    }
    await mongoose.disconnect();
  }
  //mongodb://localhost:27017/entries_db
  await mongoose.connect(url!);
  mongooseConnection.isConnected = 1;
  console.log(`conected to ${url}`);
};
export const disconnect = async () => {
  await mongoose.disconnect();
  console.log("Disconnect");
};
