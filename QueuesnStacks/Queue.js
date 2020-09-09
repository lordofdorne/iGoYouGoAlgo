
class Queue {
  constructor() {
    this.data = []
  }


  add(record) {
    this.data.unshift(record)
  }

  remove(record) {
    return this.data.pop(record)
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  weave(sourceOne, sourceTwo) {
    const newQueue = new Queue()

    while (sourceOne.peek() || sourceTwo.peek()) {
      if (sourceOne.peek()) newQueue.add(sourceOne.remove())

      if (sourceTwo.peek()) newQueue.add(sourceTwo.remove())
    }
  }
}