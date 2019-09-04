'use strict';

var expect = require('chai').expect;
var hello = require('./hello');

describe('运行 hello.js', function() {
  it('应该输出 "Hello Node"', function() {
    expect(hello()).to.equal('Hello Node');
  });
});
