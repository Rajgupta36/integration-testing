import { beforeAll, describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";
import { resetDb } from "./helpers/reset.db";

beforeAll(async () => {
    console.log("clearing db");
    await resetDb();
});
describe("POST /sum", () => {
    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 3,
            b: 1
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 4, id: expect.any(Number) });
    });
})
describe("POST /difference", () => {
    it("calculate  difference b/w  2 numbers", async () => {
        const { status, body } = await request(app).post('/difference').send({
            a: 3,
            b: 1
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 2, id: expect.any(Number) });
    });
})
describe("POST /multiply", () => {
    it("multiply 2 numbers", async () => {
        const { status, body } = await request(app).post('/multiply').send({
            a: 2,
            b: 4
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 8, id: expect.any(Number) });
    });
})
describe("POST /divide", () => {
    it("divide 2 numbers", async () => {
        const { status, body } = await request(app).post('/divide').send({
            a: 8,
            b: 4
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 2, id: expect.any(Number) });
    });
})


