import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  fullUrl: { type: String, required: true },
  shortenedUrl: { type: String, required: true },
});

export const ShortUrl = new mongoose.model("ShortUrl", shortUrlSchema);
