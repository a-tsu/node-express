// module 呼び出し
var expect = require('chai').expect;

// target 呼び出し
//var target = require(__dirname + 'test/');
var target = require('../src/calc');

describe('calc のテスト', function() {
    it('足し算ができる' , function(done) {
        expect(target.add(3,2)).to.be.deep.equal(5);
        done();
    });
    it('引き算ができる' , function(done) {
        expect(target.sub(3,2)).to.be.deep.equal(1);
        done();
    });
});
