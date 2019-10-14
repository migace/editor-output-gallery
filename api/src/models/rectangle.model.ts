import mongoose, { Schema, Document } from 'mongoose';

export interface IRectangle extends Document {
  name: string;
  date: string;
  styles: string;
}

const RectangleSchema: Schema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  styles: { type: String, required: true }
});

export const RectangleModel = mongoose.model<IRectangle>('Rectangle', RectangleSchema);
