function inArray(a, b) {
    for (let i = 0; i < b.length; i++) {
        if (a === b[i]) {
            return true
        }
    }
    return false
}

function arrayDiff(a, b) {

    arr = [];

    for (let i = 0; i < a.length; i++) {
        if (!inArray(a[i], b)) {
            arr.push(a[i])
        }
    }

    return arr;
}

arrayDiff([1,2,3], [1,2]);