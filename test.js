/*
	QUnit todo
*/

// 
var print = require('./print.js');
// 
print.pf(1, 2, 3);
// 
print.pf('%s %10s %-10s', 1, 1, 11111);
print.pf('%s %10s %-10s', 2, 11, 1111);
print.pf('%s %10s %-10s', 3, 111, 111);
print.pf('%s %10s %-10s', 4, 1111, 11);
print.pf('%s %10s %-10s', 4, 11111, 1);
//
var list = [
    { id: 1, foo: 'f', bar: 'barbarbarbar' },
    { id: 2, foo: 'foo', bar: 'barbar' },
    { id: 3, foo: 'foofoo', bar: 'bar' },
    { id: 4, foo: 'foofoofoofoo', bar: 'b', fb: 'foobar' }
];
print.pt(list);