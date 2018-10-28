let make = num => {
  let arr = [num];
  let add = (...args) => {
    if(typeof args[0] != 'function') {
      arr = arr.concat(args);
      return add;
    }
    return arr.reduce((a, b) => sum(a, b));
  }
  return add;
}

let sum = (a, b) => a + b;
