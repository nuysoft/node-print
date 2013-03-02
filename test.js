/*
	QUnit TODO
*/

// 
var print = require('./print.js');

// pringf
print.repln('-', 80);
print.pf(1, 2, 3);
print.pf('%s %10s %-10s %10s', 1, 1, 12345, '1');
print.pf('%s %10s %-10s %10s', 2, 12, 1234, '123');
print.pf('%s %10s %-10s %10s', 3, 123, 123, '123456');
print.pf('%s %10s %-10s %10s', 4, 1234, 12, '123456789');
print.pf('%s %10s %-10s %10s', 5, 12345, 1, '1234567890');
print.pf('%s %10.1d %-10s %10s', 6, 1.123, 123456, '1234567890123');
print.pf('%s %3s %3s %3s', 7, 1234, 12345, 123456);

// table
print.repln('-', 80);
var list = [
    { id: 1, foo: 'f', bar: 'barbarbarbar' },
    { id: 2, foo: 'foo', bar: 'barbar' },
    { id: 3, foo: 'foofoo', bar: 'bar' },
    { id: 4, foo: 'foofoofoofoo', bar: 'b', fb: 'foobar' }
];
print.pt(list);

// simple color test
print.repln('-', 80);
var out = 'http://nuysoft.com/ nuysoft@gmail.com';
console.log(out.red);
print.red(out);
print.color('red', out);

// all color
print.repln('-', 80);
print.bold(out);
print.italic(out);
print.underline(out);
print.inverse(out);
print.white(out);
print.grey(out);
print.black(out);
print.blue(out);
print.cyan(out);
print.green(out);
print.magenta(out);
print.red(out);
print.yellow(out);

// date format
print.repln('-', 80);
print.pln(new Date(), 'yyyy-MM-dd A HH:mm:ss');
print.pln(new Date(), 'yyyy-MM-dd a HH:mm:ss');
print.pln(new Date(), 'yy-MM-dd HH:mm:ss');
print.pln(new Date(), 'y-MM-dd HH:mm:ss');
print.pln(new Date(), 'y-M-d H:m:s');

// data parse TODO
print.repln('-'.red, 80);
var date = print.parse('2013-03-01 00:31:05', 'ISO8601Long');
print.pln(date);

