const fibonacci = function(num) {
    num = Number(num);

    if (num < 0) return "OOPS";

    if (num === 0) return 0;

    let a = 0;
    let b = 1;

    for (i=1; i<num; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b;   
};

// Do not edit below this line
module.exports = fibonacci;
