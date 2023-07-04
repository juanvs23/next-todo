import mongoose from 'mongoose';

const isMongoId = (id: string): string => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return 'is not mongoId';
  }
  return 'is mongoId';
};
export default isMongoId;
