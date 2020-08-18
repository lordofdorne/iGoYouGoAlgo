
const removeDuplicates = (head) => {
  if (!head || !head.next) return head;

  let temp = head
  while (head.next) {
    //if the next val equals the current one then we have a duplicate
    if (head.next.val === head.val) {
      //set the next value by skipping over
      head.next = head.next.next
    } else {
      //if not move to the next val
      head = head.next
    }
  }
  return temp
}

const input = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 3,
          next: {
            val: 3,
            next: {
              val: 3,
              next: {
                val: 3,
                next: {
                  val: 3,
                  next: {
                    val: 3,
                    next: {
                      val: 5,
                      next: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

console.log(removeDuplicates(input))