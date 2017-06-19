var rewire = require('rewire');
var chai = require('chai');
var expect = chai.expect;
chai.config.includeStack = false;
describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('content', function() {
          request('http://localhost:8080/' , function(error, response, body) {
            expect(body).to.equal('Hello World');
            });
        });
    });

    describe ('About page', function() {
        it('status', function(){
            request('http://localhost:8080/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
            });
        });

    });
});