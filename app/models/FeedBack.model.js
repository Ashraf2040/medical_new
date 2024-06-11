import mongoose, { Schema } from 'mongoose';

import { connectTODB } from '../../lib/conn';

connectTODB();

const FeedBackSchema = new Schema(
  {
    rating: { type: String, required: true },
    message: { type: String, required: false },
    lang: { type: String, required: true, trim: true, lowercase: true },
    age: {
      type: String,
      default: null
    },
    gender: {
      type: String,
      default: null
    },
    nationality: {
      type: String,
      default: null
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports =
  mongoose.models.FeedBacks || mongoose.model('FeedBacks', FeedBackSchema);
