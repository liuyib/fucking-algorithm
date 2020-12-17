function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right) {
  const rnd = left + Math.floor(Math.random() * (right - left + 1));
  swap(arr, left, rnd);

  /**
   * 循环不变量：
   * arr[left + 1, lt]    < v
   * arr[lt + 1, i - 1]  == v
   * arr[gt, r]           > v
   *
   * 终止条件：i === gt
   */
  let lt = left;
  let gt = right + 1;
  let i = left + 1;

  while (i < gt) {
    if (arr[i] < arr[left]) {
      lt++;
      swap(arr, i, lt);
      i++;
    } else if (arr[i] > arr[left]) {
      gt--;
      swap(arr, i, gt);
    } else {
      i++;
    }
  }

  swap(arr, left, lt);

  return { lt: lt - 1, gt };
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const { lt, gt } = partition(arr, left, right);

  quickSort(arr, left, lt);
  quickSort(arr, gt, right);
}

// **************************************************
// 下面是测试代码
// **************************************************

let arr = [];
// 数据规模
const n = 10000 * 100;

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
 *  - 等值数据：任意量级的数据都可排序。时间复杂度为 O(N) 级别，特别快。
 */
