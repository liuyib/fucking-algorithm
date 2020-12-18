function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right) {
  const rnd = left + Math.floor(Math.random() * (right - left + 1));
  swap(arr, left, rnd);

  let j = left;

  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[left]) {
      j++;
      swap(arr, i, j);
    }
  }

  swap(arr, left, j);

  return j;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const mid = partition(arr, left, right);

  quickSort(arr, left, mid - 1);
  quickSort(arr, mid + 1, right);
}

// **************************************************
// 下面是测试代码
// **************************************************

let arr = [];
// 数据规模
const n = 1000;

// 生成随机数据
function genRandomData(arr, n) {
  arr.length = 0;
  for (let i = 0; i < n; i++) arr.push(Math.floor(Math.random() * n));
}

// 生成已经排好序的数据
function genRegularData(arr, n) {
  arr.length = 0;
  for (let i = 0; i < n; i++) arr.push(i);
}

// 生成所有值相等的数据
function genSameData(arr, n) {
  arr.length = 0;
  for (let i = 0; i < n; i++) arr.push(0);
}

// 检查是否排好序
function isSorted(arr, n) {
  for (let i = 1; i < n; i++) if (arr[i - 1] > arr[i]) return false;
  return true;
}

// 测试随机数据
genRandomData(arr, n);
console.time();
quickSort(arr);
console.timeEnd();
console.log(`sorted :`, isSorted(arr, n));

// 测试已经排好序的数据
genRegularData(arr, n);
console.time();
quickSort(arr);
console.timeEnd();
console.log(`sorted :`, isSorted(arr, n));

// 测试所有值相等的数据
genSameData(arr, n);
console.time();
quickSort(arr);
console.timeEnd();
console.log(`sorted :`, isSorted(arr, n));

/**
 * 测试环境：Node.js v12
 * 测试结果：
 *  - 随机数据：任意量级的数据都可排序。
 *  - 有序数据：任意量级的数据都可排序。
 *  - 等值数据：几千数据：可以排序。上万数据：爆栈。
 */
