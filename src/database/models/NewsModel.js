"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NewsSchema = new mongoose_1.Schema({
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
const NewsModel = (0, mongoose_1.model)("News", NewsSchema, "NewsCollection");
exports.default = NewsModel;
