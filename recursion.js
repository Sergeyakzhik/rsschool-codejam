let recursion = obj => {
  if(!recursion.arr)
    recursion.arr = [];

  let level = 0;
  let curVal = obj.value;
  let tempTree = Object.assign({},tree);

  while(curVal != tempTree.value) {
    if(curVal > tempTree.value)
      tempTree = tempTree.right;
    else tempTree = tempTree.left;
      level++;
  }

  if(!Array.isArray(recursion.arr[level]))
    recursion.arr[level] = [];

  recursion.arr[level].push(obj.value);

  if(obj.left !== undefined)
    recursion(obj.left);
  if(obj.right !== undefined)
    recursion(obj.right);
    
  return recursion.arr;
}
