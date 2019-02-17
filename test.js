const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const expect = chai.expect;
// const rewire = require('rewire');
// const foobar = rewire('app/apiRoutes')

// Setting up the chai http plugin. This plugin allows for HTTP integration testing with Chai assertions!
chai.use(chaiHttp);

// set a variable for making http requests.
let request;
//Unit Tests
// var arrayReduction = foobar.__get__('arrayReduction');

describe('GET /api/employees', function () {
  
//  clear the test db 
   beforeEach(function () {
    request = chai.request(server);
   });

  describe('arrayReduction', function() {
    it('should return the sum of two whole numbers', function() {
      expect(arrayReduction([ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ])).to.equal(32);
    });
  });

describe('GET /api/employees', function () {
  it('POSITIVE TEST get api should find 6 employees', function () {
    request.get('/api/employees').end(function (err, res) {
        let responseBody = res.body
        console.log(responseBody[0].scores);
        expect(responseBody)
          .is.an('array')
          .that.has.lengthOf(6);
    });
  });
  it('POSITIVE TEST http api should have status of 200', function () {
    request.get('/api/employees').end(function (err, res) {
        let responseStatus = res.status;
        expect(responseStatus).to.equal(200);
    });
  });
  it('POSITVE TEST scores lenght should be 10', function () {
    request.get('/api/employees').end(function (err, res) {
        let responseBody = res.body
        console.log(responseBody[0].scores.length);
        expect(responseBody[0].scores).that.has.lengthOf(10);
    });
  });
  });
});
