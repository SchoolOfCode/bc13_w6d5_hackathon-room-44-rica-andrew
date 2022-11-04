import supertest from "supertest";
import app from "../app.js";
import { expect, test, beforeEach, afterAll } from "@jest/globals";
import { resetAllTables } from '../db/scripts/helpers.js'
import { pool } from '../db/index.js'

// afterAll (async function () {
//     await pool.end();
// });
beforeEach(() => {
 return resetAllTables()
});

afterAll(() => {
  resetAllTables(),
  pool.end()
});

describe("get the whole toDo List", () => {
  test("Get /api/todos", async function () {
    //Arrange  //Act
    const response = await supertest(app).get("/api/todos");
    //assert
    expect(response.status).toBe(200);
    console.log(response.body);
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
  });
});

test("Post /api/todos", async function () {
  const response = await supertest(app).post("/api/todos").send({
    task: "water the plants",
    completionDate: "2022-12-11",
  });

  expect(response.status).toEqual(201);
  console.log(response.body);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: expect.any(Number),
      task: expect.any(String),
      completion_date: expect.any(String),
    },
  });
});

test("Missing/invalid Post /api/todos", async function () {
  const response = await supertest(app).post("/api/todos").send({
    task: "rent first house",
    // completionDate: "ASAP"
  });
  expect(response.status).toEqual(400);
  expect(response.body).toStrictEqual({
    success: false,
    error: expect.any(String),
  });
});

describe("delete a task from the toDo List", () => {
test("Delete /api/todos/2", async function () {
    const idToDelete = 2;
    const response = await supertest(app).delete(`/api/todos/${idToDelete}`);
    expect(response.status).toBe(200);
expect(response.body).toStrictEqual({
  success: true,
  payload: expect.any(Object)
});
})
})