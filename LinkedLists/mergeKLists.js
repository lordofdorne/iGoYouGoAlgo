// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.



var mergeKLists = function (lists) {
  let i = 0;

  let result = null;

  lists.forEach(v => {
    result = mergeList(result, v);
  });

  return result;
};

var mergeList = (l1, l2) => {
  if (l1 == null)
    return l2;

  if (l2 == null)
    return l1;

  if (l1.val < l2.val) {
    l1.next = mergeList(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeList(l1, l2.next);
    return l2;
  }
}