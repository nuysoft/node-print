/*
    %-ms    - String.
    %-m.nd  - Number (both integer and float).
    %-mj    - JSON.
*/
exports.pf = exports.printf = function pf(format, args){
    var rformat = /%([-+]?)(\d+)?(?:\.?(\d+)?)(s|d)/ig, out;

    if(typeof format !== 'string' || !format.match(rformat)) {
        console.log.apply({}, arguments);
        return exports;
    }

    args = [].slice.call(arguments, 1);
    var index = 0;
    out = format.replace(rformat, function(match, dir, m, n, flag){
        // console.log(match, dir, m, n, flag);
        var arg = args[index++], prefix = '', suffix = '';
        switch(flag){
            case 's':
                break;
            case 'd':
                arg = parseFloat(arg);
                break;
            case 'j':
                arg = JSON.stringify(arg);
                break;
        }
        var fix = parseInt(m) - (arg + '').length;
        for( var i = 0; i < fix; i++ ) {
            dir === '-' ? suffix += ' ' : prefix += ' ';
        }
        return prefix + arg + suffix;
    })
    console.log(out);
    return exports;
}

exports.pt = exports.printTable = function(rs){
    if(!rs || !rs.length) return;
    var style = genStyle(rs);
    var devider = genDevider(style);
    var th = genTh(style);
    var trs = genTr(rs, style);

    // console.log(style);
    
    console.log(devider);
    console.log(th);
    console.log(devider);
    for (var tr in trs) {
        console.log(trs[tr]);
    }
    console.log(devider);
    return exports;
}

function getLen(o) {
    return ('' + o).length;
}

function genStyle(rs) {
    var style = {};
    // init
    for(var r in rs){
        for (var key in rs[r]) {
            style[key] = key.length;
        }    
    }
    // calculate max width of a colume
    var width = 0;
    for (var key in style) {
        for (var r in rs) {
            width = getLen(rs[r][key]);
            style[key] = width > style[key] ? width : style[key];
        }
    }
    return style;
}

function genDevider(style) {
    var devider = '+';
    for (var key in style) {
        for (var i = 0; i < style[key] + 2; i++) {
            devider += '-';
        }
        devider += '+';
    }
    return devider;
}

function genTh(style) {
    var header = '|';
    for (var key in style) {
        header += ' ';
        header += key;
        for (var i = 0; i < style[key] + 2 - 1 - key.length; i++) {
            header += ' ';
        }
        header += '|';
    }
    return header;
}

function genTr(rs, style) {
    var trs = [];
    var tr;
    for (var r in rs) {
        tr = '|';
        for (var key in style) {
            tr += ' ';
            tr += rs[r][key];
            for (var i = 0; i < style[key] + 2 - 1 - getLen(rs[r][key]); i++) {
                tr += ' ';
            }
            tr += '|';
        }
        trs.push( tr );
    }
    return trs;
}