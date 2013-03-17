# Print Tool

1. printf in JavaScript
2. Prettify log's color
3. Prettify JSONArray to table
4. Simple date format

## Installation

    npm install node-print


## printf in JavaScript

    // syntax
    exports.pf(format, args)
    format
        %-ms    - String
        %-m.nd  - Number (both integer and float)
        %-mj    - JSON

    // examples
    print.pf('%s %10s %-10s %10s', 1, 1, 12345, '1');
    print.pf('%s %10s %-10s %10s', 2, 12, 1234, '123');
    print.pf('%s %10s %-10s %10s', 3, 123, 123, '123456');
    print.pf('%s %10s %-10s %10s', 4, 1234, 12, '123456789');
    print.pf('%s %10s %-10s %10s', 5, 12345, 1, '1234567890');
    print.pf('%s %10.1d %-10s %10s', 6, 1.123, 123456, '1234567890123');
    print.pf('%s %3s %3s %3s', 7, 1234, 12345, 123456);

    // out
    1          1 12345               1
    2         12 1234              123
    3        123 123            123456
    4       1234 12          123456789
    5      12345 1          1234567890
    6        1.1 123456     1234567890123
    7 1234 12345 123456

## Prettify log's color
    
    // examples
    var out = 'http://nuysoft.com/ nuysoft@gmail.com';
    // 
    console.log(out.red);
    print.red(out);
    print.color('red', out);
    // 
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

## Prettify JSONArray to table
    
    // examples
    var list = [
        { id: 1, foo: 'f', bar: 'barbarbarbar' },
        { id: 2, foo: 'foo', bar: 'barbar' },
        { id: 3, foo: 'foofoo', bar: 'bar' },
        { id: 4, foo: 'foofoofoofoo', bar: 'b', fb: 'foobar' }
    ];
    print.pt(list);

    // out
    +----+--------------+--------------+-----------+
    | id | foo          | bar          | fb        |
    +----+--------------+--------------+-----------+
    | 1  | f            | barbarbarbar | undefined |
    | 2  | foo          | barbar       | undefined |
    | 3  | foofoo       | bar          | undefined |
    | 4  | foofoofoofoo | b            | foobar    |
    +----+--------------+--------------+-----------+

## Simple date format

### Pattern Letters

    Format  Description                                                 Example
    ------- ----------------------------------------------------------- -------
    yyyy    A full numeric representation of a year, 4 digits           1999 or 2003
    yy      A two digit representation of a year                        99 or 03
    y       A two digit representation of a year                        99 or 03
    MM      Numeric representation of a month, with leading zeros       01 to 12
    M       Numeric representation of a month, without leading zeros    1 to 12
    dd      Day of the month, 2 digits with leading zeros               01 to 31
    d       Day of the month without leading zeros                      1 to 31
    HH      24-hour format of an hour with leading zeros                00 to 23
    H       24-hour format of an hour without leading zeros             0 to 23
    hh      12-hour format of an hour without leading zeros             1 to 12
    h       12-hour format of an hour with leading zeros                01 to 12
    mm      Minutes, with leading zeros                                 00 to 59
    m       Minutes, without leading zeros                              0 to 59
    ss      Seconds, with leading zeros                                 00 to 59
    s       Seconds, without leading zeros                              0 to 59
    SS      Milliseconds, with leading zeros                            000 to 999
    S       Milliseconds, without leading zeros                         0 to 999
    A       Uppercase Ante meridiem and Post meridiem                   AM or PM
    a       Lowercase Ante meridiem and Post meridiem                   am or pm

### Examples

    print.pln(new Date(), 'yyyy-MM-dd A HH:mm:ss');
    print.pln(new Date(), 'yyyy-MM-dd a HH:mm:ss');
    print.pln(new Date(), 'yy-MM-dd HH:mm:ss');
    print.pln(new Date(), 'y-MM-dd HH:mm:ss');
    print.pln(new Date(), 'y-M-d H:m:s');

