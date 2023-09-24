function divideAndConquerSum(a) {
    return helper(a, 0, a.length - 1);
}

function helper(arr, lo, hi) {
    //Base cases
    if (lo > hi) { return 0; }
    if (lo === hi) {
        return arr[lo];
    }
    //If there are only two elements
    if (hi - lo + 1 === 2) {
        return arr[lo] + arr[hi];
    }


    let third = lo + Math.floor((hi - lo + 1) / 3);
    let third2 = lo + 2 * Math.floor((hi - lo + 1) / 3);

    return helper(arr, lo, third - 1) + helper(arr, third, third2 - 1) + helper(arr, third2, hi);
}
