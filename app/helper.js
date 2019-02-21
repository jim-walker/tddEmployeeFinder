module.exports = {
getSum: function (total, num) {
    return parseInt(total) + parseInt(num);
},
arrayReduction: function (array) {
    return array.reduce(this.getSum);
}
}