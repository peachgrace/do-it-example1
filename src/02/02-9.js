var parts = ['banana', '10'];
var key = parts[0];
var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1])
console.log(Number.isNaN(Number(parts[1])));
var result = {};
result[key] = value;

console.log(result);