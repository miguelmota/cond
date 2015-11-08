const test = require('tape');
const cond = require('../cond');

test('cond', function (t) {
  'use strict';

  t.plan(14);

  var fn = cond([
    [function(t) { return t === 0;}, 'Water freezes at 0°C'],
    [function(t) { return t === 100;}, 'Water boils at 100°C'],
    [true, function(t) { return `Nothing special happens at ${t||'?'}°C`;}]
  ]);

  t.equal(fn(0), 'Water freezes at 0°C');
  t.equal(fn(), 'Nothing special happens at ?°C');
  t.equal(fn(50), 'Nothing special happens at 50°C');
  t.equal(fn(100), 'Water boils at 100°C');

  var fn2 = cond([
    [function(t) { return t === 0;}, 'Water freezes at 0°C'],
    [function(t) { return t === 100;}, 'Water boils at 100°C'],
    [function() { return true; }, `Nothing special happens`]
  ]);

  t.equal(fn2(0), 'Water freezes at 0°C');
  t.equal(fn2(), 'Nothing special happens');
  t.equal(fn2(50), 'Nothing special happens');
  t.equal(fn2(100), 'Water boils at 100°C');

  var fn3 = cond([]);

  t.equal(fn3('foo'), undefined);

  var fn4 = cond({foo: 'bar'}, [true, 'qux']);

  t.equal(fn4('foo'), undefined);

  var fn5 = cond([
    [false, 'foo'],
    {}
  ]);

  t.equal(fn5(), undefined);

  var fn6 = cond([
    [false, 'foo'],
    {},
    [true, 'bar']
  ]);

  t.equal(fn6(), 'bar');

  var fn7 = cond([
    [{}, 'bar']
  ]);

  t.equal(fn7(), 'bar');

  var fn8 = cond([
    [false, 'foo'],
    [false, 'bar']
  ]);

  t.equal(fn8(), undefined);
});
