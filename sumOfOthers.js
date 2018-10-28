let sumOfOthers = array => array.map((cur, ind, arr) => arr.reduce((a, b) => a + b) - cur);
