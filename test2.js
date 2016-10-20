var supertest = require("supertest");
var should = require("should");

// Este agente se refiere al puerto donde se está ejecutando el programa

var server = supertest.agent("http://localhost:3100");

// empezando el test unitario

describe("SAMPLE unit test",function(){

  // #1 tiene que retornar home page

  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });

  it("should add two number",function(done){

    //calling ADD api
    server
    .post('/add')
    .send({num1 : 10, num2 : 20})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.should.equal(30);
      done();
    });
  });

});