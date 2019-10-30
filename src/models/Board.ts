import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    board_name: { type: String, unique: true },
    status_text: { type: String, default: '' },
     project_id: { type: [ mongoose.Types.ObjectId ] },
     created_on: { type: Date, default: new Date() },
  }
);


export default mongoose.model('Board', boardSchema);