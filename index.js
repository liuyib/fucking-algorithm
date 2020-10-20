/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  while (node) {
    if (node.next) {
      node.val = node.next.val;

      if (!node.next.next) {
        node.next = null;
      }
    }
    node = node.next;
  }
};

// 测试，先用数组构建出链表
const inputs = ["a", "b", "c", "d", "e", "f"];
let head = null;
let curr = null;
let find = null;

inputs.forEach((input) => {
  const newNode = new ListNode(input);
  if (head === null) {
    curr = find = head = newNode;
  } else {
    curr.next = newNode;
    curr = curr.next;
  }
});

while (find) {
  if (find.val !== "c") {
    find = find.next;
  } else {
    break;
  }
}

deleteNode(find);

// 输出结果
let result = "";
while (head !== null) {
  result += `${head.val}${head.next === null ? "" : "->"}`;
  head = head.next;
}
console.log(result);
