exports.min = function min(array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let minElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minElement) {
            minElement = array[i];
        }
    }
    return minElement;
}

exports.max = function max(array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let maxElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }
    return maxElement;
}

exports.avg = function avg(array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }
    let result = sum/array.length;
    return result;
}
