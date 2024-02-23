import { Document, Schema, model, models } from "mongoose";

export interface userInterface extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  planId?: Number;
  creditBalance?: Number;
}

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },

}, {timestamps: true});
const User = models?.User || model("User", userSchema);

export default User;
