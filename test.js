const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const aroutes = require('./app/routing/apiRoutes');
const helper = require('./app/helper');
const expect = chai.expect;
// const rewire = require('rewire');
// const foobar = rewire('app/apiRoutes')

// Setting up the chai http plugin. This plugin allows for HTTP integration testing with Chai assertions!
chai.use(chaiHttp);

// set a variable for making http requests.
let request;
//Unit Tests
// var arrayReduction = foobar.__get__('arrayReduction');
  describe('arrayReduction', function() {
    it('POSITIVE TEST arrayReduction should return the correct sum of an array of numbers', function() {
      expect(helper.arrayReduction([ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ])).to.equal(32);
    });
    it('POSITIVE TEST arrayReduction should return a negative sum given an array of negative numbers', function() {
      expect(helper.arrayReduction([ -5, -1, -4, -4, -5, -1, -2, -5, -4, -1 ])).to.lessThan(-1);
    });
    it('NEGATIVE TEST arrayReduction should not return boolean false given a valid array of numbers', function() {
      expect(helper.arrayReduction([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ])).to.not.be.false;
    });
    it('NEGATIVE TEST arrayReduction should not return NaN given a valid array of numbers', function() {
      expect(helper.arrayReduction([ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ])).to.not.be.NaN;
    });
  });
  describe('getSum', function() {
    it('POSITIVE TEST getSum should return 4 when passed (2,2)', function() {
      expect(helper.getSum(2,2)).to.equal(4);
    });
    it('POSITIVE TEST getSum should return NaN when passed numeric strings', function() {
      expect(helper.getSum('2','2')).to.equal(4);
    });
    it('NEGATIVE TEST getSum should return Not a Number when passed nothing', function() {
      expect(helper.getSum()).to.be.NaN;
    });
    it('NEGATIVE TEST getSum should not return fractional values', function() {
      expect(helper.getSum(1.2,1.4)).to.not.equal(2.6);
    });
  });

describe('GET /api/employees', function () {
  
//  clear the test db 
   beforeEach(function () {
    request = chai.request(server);
   });

  it('POSITIVE TEST get api returns no errors', function (done) {
    request.get('/api/employees').end(function (err, res) {
        expect(err).to.be.null;
        done();
    });
  });
  it('POSITIVE TEST initial get employee api should an array of 6 employees', function (done) {
    request.get('/api/employees').end(function (err, res) {
        let responseBody = res.body
        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(6);
          done();
    });
  });
  it('NEGATIVE TEST initial get employee api should not return an object', function (done) {
    request.get('/api/employees').end(function (err, res) {
        let responseBody = res.body
        expect(responseBody)
          .to.not.be.an('object')
          done();
    });
  });
  it('NEGATIVE TEST initial get employee api should not return a status code of 404', function (done) {
    request.get('/api/employees').end(function (err, res) {
        let responseStatus = res.status;
        expect(responseStatus).to.not.equal(404);
        done();
    });
  });
  });
