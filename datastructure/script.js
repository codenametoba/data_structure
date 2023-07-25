
function findSumOfDistinctElements(set1, set2) {
  let sum = 0;
  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i])) {
      sum += set1[i];
    }
  }
  for (let i = 0; i < set2.length; i++) {
    if (!set1.includes(set2[i])) {
      sum += set2[i];
    }
  }
  return sum;
}

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(findSumOfDistinctElements(set1, set2));


function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}
let v1 =  [5,7,9];
let v2 = [4,8,6];
console.log(dotProduct(v1, v2));

function orthogonal(v1, v2) {
  let ps = dotProduct(v1, v2);
  if (ps === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(orthogonal(v1, v2));




