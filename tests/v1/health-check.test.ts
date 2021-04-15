import app from "../../src/index";
import * as supertest from "supertest";
describe("health-check", () => {
  let request;
  beforeEach(() => {
    request = supertest(app);
  });
  it("should return a successful response for GET /v1/health-check", done => {
    request.get("/v1/health-check")
      .expect('Content-Type', "application/json; charset=utf-8")
      .expect(200, done);
  });
});