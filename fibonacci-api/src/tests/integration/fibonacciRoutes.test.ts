import { app } from "../../index";
import request from 'supertest'

test("fibonacci route works", done => {
    request(app)
      .get('/api/fibonacci/10')
      .expect("Content-Type", /json/)
      .expect({ result: 55 })
      .expect(200, done);
  });

  test("fibonacci handling bad request", done => {
    request(app)
      .get('/api/fibonacci/notapositivenumber')
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
