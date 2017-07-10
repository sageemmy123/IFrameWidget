var myObject = function(){
    var value = 0;
    return {
        increment: function(inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function(){
            return value;
        }
    };
}();

console.log(myObject);

var ar1 = [1,2,3,4,5];
var fff = [func1, func2, func3];

fff[0]() = ar1[0];
fff[1]() = ar1 [0] + ar1[2];\