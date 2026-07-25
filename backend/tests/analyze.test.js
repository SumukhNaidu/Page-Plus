const request = require("supertest");
const app = require("../app");

describe("Page Pulse API", () => {

  test("GET / should return API status", async () => {

    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);

  });

  test("POST /api/analyze without URL", async () => {

    const res = await request(app)
      .post("/api/analyze")
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);

  });

  test("POST /api/analyze with invalid URL", async () => {

    const res = await request(app)
      .post("/api/analyze")
      .send({
        url: "hello"
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);

  });

});