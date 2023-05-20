import mongoose, { Schema, Model } from 'mongoose';
import { Entry, EntryStatus } from '@/models/context';

/**
 * export interface Entry {
 * _id: string;
 * title: string;
 * description?: string;
 * createAt: string;
 * status: EntryStatus;
 * }
 */
interface IEntry extends Entry {}

const EntrySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: {
        values: ['pending', 'inProgress', 'Completed'],
        message: '{VALUE} Status is incorrect',
      },
    },
  },
  { timestamps: true }
);

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', EntrySchema);

export default EntryModel;
