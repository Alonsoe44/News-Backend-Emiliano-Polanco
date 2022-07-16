import { model, Schema } from "mongoose";

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: String,
    default: "Anonymous",
  },
  archiveDate: {
    type: Date,
  },
});

const NewsModel = model("News", NewsSchema, "NewsCollection");

export default NewsModel;
