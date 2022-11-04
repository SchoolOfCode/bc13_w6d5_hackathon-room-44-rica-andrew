import supertest from "supertest";
import app from "../app.js";
import { expect, test } from "@jest/globals";

test("Get /api/todos", async function (){
   const response  = await supertest(app).get("/api/todos");
   expect(response.status).toBe(200);
   console.log(response.body)
   expect(response.body).toStrictEqual({
     success: true,
     payload: expect.any(Array),
   });
})