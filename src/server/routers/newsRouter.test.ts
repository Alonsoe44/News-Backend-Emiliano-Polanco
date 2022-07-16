/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectDatabase from "../../database";
import NewsModel from "../../database/models/NewsModel";
import NewsInterface from "../../interfaces/NewsInterface";
import app from "../index";

let mongoServer;
let snippedId: string;

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
    archiveDate: "2024-01-01",
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

  const response = await request(app).get("/news");
  snippedId = response.body[0]._id;
});

afterEach(async () => {
  await NewsModel.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Given a /news endpoint", () => {
  describe("When it receives a get petition", () => {
    test("Then it should reply with 2 news ", async () => {
      const { body } = await request(app).get("/news").expect(200);
      expect(body.length).toBe(2);
    });
  });
});

describe("Given a /news/:id endpoint", () => {
  describe("When it receives a patch petition with an edition object", () => {
    test("Then if it finds the news it should update the news ans reply with the edited object", async () => {
      const editionObject = {
        archiveDate: "1900-01-01",
      };
      const newEditedNews: NewsInterface = {
        title: "Test news",
        description: "Test description",
        content: "Test content",
        date: "2019-12-31T23:00:00.000Z",
        archiveDate: "1900-01-01T00:00:00.000Z",
        author: "Test author",
      };

      const { body } = await request(app)
        .patch(`/news/${snippedId}`)
        .send(editionObject)
        .expect(200);

      expect(body).toMatchObject(newEditedNews);
    });
  });

  describe("When it receives a delete petition with with a valid id", () => {
    test("Then if it finds the news it should delete the iteam and reply with a succes message", async () => {
      const succesMessage = {
        message: "Succes, News deleted",
      };
      const { body } = await request(app)
        .delete(`/news/${snippedId}`)
        .expect(200);
      expect(body).toEqual(succesMessage);
    });
  });
});
