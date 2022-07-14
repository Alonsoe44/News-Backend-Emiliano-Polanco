/* eslint-disable import/no-extraneous-dependencies */
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectDatabase from "../../database";
import NewsModel from "../../database/models/NewsModel";
import NewsInterface from "../../interfaces/NewsInterface";
import app from "../index";

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const connectionString = mongoServer.getUri();

  await connectDatabase(connectionString);
});

beforeEach(async () => {
  await NewsModel.create({
    title: "Test news",
    description: "Test description",
    content: "Test content",
    date: " 2020-01-01",
    archiveDate: "2020-01-01",
    author: "Test author",
  } as NewsInterface);

  await NewsModel.create({
    title: "The magic it's in your hearth",
    description: "Test to see how a description will look like",
    content: "Now let's imagine that this is the content of the news",
    date: "1948-01-01",
    archiveDate: "1842-01-01",
    author: "Emilious Dostoevsky",
  } as NewsInterface);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Given a getNewsController", () => {
  describe("When it receives a request", () => {
    test("Then it should call the res function passing in the news ", async () => {
      const { body } = await request(app).get("/news").expect(200);
      console.log(body);
      expect(body.length).toBe(2);
    });
  });
});
