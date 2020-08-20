const flattenList = head => {

  let curr = head

  while (curr) {
    let next = curr.next

    if (curr.child) {
      let child = flattenList(curr.child)
      curr.next = child
      child.prev = current
      curr.child = null

      while (curr.next) {
        curr = curr.next
      }
      if (next) next.prev = curr
      curr.next = next
    }
    curr = curr.next
  }
  return head
}