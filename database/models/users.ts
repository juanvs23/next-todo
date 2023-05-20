import mongoose, { Schema, Model } from 'mongoose';
import { UserData } from '@/models';

/**
 * export interface UserData {
  _id: string;
  name: string;
  email: string;
  password: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
 */
interface IUserData extends UserData {}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: {
      type: String,
      enum: {
        values: ['active', 'pending', 'inactive'],
        message: '{VALUE} Status is incorrect',
      },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const UserModel: Model<IUserData> = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
