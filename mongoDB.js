import { mongoose, Schema, model } from "mongoose";
const mongoURI = "mongodb://admin:1234@localhost:27017";

mongoose.connect(mongoURI, {});
